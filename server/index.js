import express from "express";
import cors from "cors";
import multer from "multer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";
import jsonServer from "json-server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const dbPath = path.resolve(projectRoot, "data", "db.json");
const uploadDir = path.resolve(projectRoot, "uploads");

await mkdir(uploadDir, { recursive: true });

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_BASE_URL =
    process.env.PUBLIC_BASE_URL?.replace(/\/$/, "") ||
    `http://localhost:${PORT}`;

app.use(cors());
app.use("/uploads", express.static(uploadDir));

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, uploadDir);
    },
    filename: (_, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = `${Date.now()}-${Math.random().toString(16).slice(2)}${ext}`;
        cb(null, name);
    },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    const url = `${PUBLIC_BASE_URL}/uploads/${req.file.filename}`;
    res.json({ url });
});

const router = jsonServer.router(dbPath);
app.use(jsonServer.bodyParser);
app.use(router);

app.listen(PORT, () => {
    console.log(`API server running at ${PUBLIC_BASE_URL}`);
});