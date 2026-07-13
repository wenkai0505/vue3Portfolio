import { HttpResponse, http } from "msw";
import type { WorkPayload } from "@/utils/type";
import { users, workData } from "./data";

let worksDB = workData.map((work) => ({
    ...work,
    tags: [...work.tags],
}));

const getSortedWorks = () => {
    return [...worksDB].sort((a, b) => a.id - b.id);
};

const getNextWorkId = () => {
    return worksDB.reduce((max, work) => Math.max(max, work.id), 0) + 1;
};

export const handlers = [
    http.get("/works", () => {
        return HttpResponse.json(getSortedWorks());
    }),

    http.get("/works/:id", ({ params }) => {
        const id = Number(params.id);
        const work = worksDB.find((item) => item.id === id);

        if (!work) {
            return HttpResponse.json(
                { message: "Work not found" },
                { status: 404 },
            );
        }

        return HttpResponse.json(work);
    }),

    http.post("/works", async ({ request }) => {
        const body = (await request.json()) as WorkPayload;

        const newWork = {
            id: getNextWorkId(),
            ...body,
        };

        worksDB = [...worksDB, newWork];

        return HttpResponse.json(newWork, { status: 201 });
    }),

    http.get("/users", () => {
        return HttpResponse.json(users);
    }),

    http.post("/upload", async ({ request }) => {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!(file instanceof File)) {
            return HttpResponse.json(
                { message: "No file uploaded" },
                { status: 400 },
            );
        }

        const firstWork = workData[0];
        return HttpResponse.json({
            url: firstWork?.imageUrl ?? "",
        });
    }),
];
