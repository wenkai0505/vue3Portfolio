import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "layout",
        component: () => import("@/views/Layout.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/views/Home.vue"),
            },
            {
                path: "create",
                name: "create",
                component: () => import("@/views/Create.vue"),
            },
            {
                path: "about",
                name: "about",
                component: () => import("@/views/About.vue"),
            },
        ],
    },
    {
        path: "/workInfo/:id",
        name: "workInfo",
        component: () => import("@/views/WorkInfo.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    const isLogin = localStorage.getItem("user");
    if (to.path === "/create" && !isLogin) {
        return "/login";
    }
    return true;
});

export default router;
