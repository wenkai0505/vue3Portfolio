import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

async function enableMocking() {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    try {
        const { worker } = await import("@/mocks/browser");
        await worker.start({
            onUnhandledRequest: "warn",
        });
    } catch (error) {
        console.error("MSW failed to start:", error);
    }
}

await enableMocking();

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router);
app.mount("#app");
