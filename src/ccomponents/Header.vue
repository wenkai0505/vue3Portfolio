<template>
    <div class="header">
        <div class="logo">R</div>
        <div class="menu">
            <a
                :class="{ active: activeMenu === menu.path }"
                v-for="menu in menuList"
                :key="menu.path"
                @click="handleLinkClick(menu.path)"
            >
                {{ menu.title }}
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";

const router = useRouter();
const route = useRoute();

const activeMenu = computed(() => {
    return route.path;
});

const isLogin = ref(!!localStorage.getItem("user"));

const menuList = computed(() => {
    if (isLogin.value) {
        return [
            {
                path: "/",
                title: "Home",
            },
            {
                path: "/about",
                title: "About",
            },
            {
                path: "/create",
                title: "Create",
            },
            {
                path: "/logout",
                title: "Log out",
            },
        ];
    } else {
        return [
            {
                path: "/",
                title: "Home",
            },
            {
                path: "/about",
                title: "About",
            },
            {
                path: "/login",
                title: "Sign in",
            },
        ];
    }
});

const handleLinkClick = (path: string) => {
    if (path === "/logout") {
        localStorage.removeItem("user");
        isLogin.value = false;
        router.push("/");
        return;
    }
    router.push(path);
};
</script>

<style scoped lang="scss">
.header {
    @include box(100%, 60px);
    position: absolute;
    padding: 0 20px;
    top: 0;
    left: 0;
    z-index: 97;
    @include flex;
    justify-content: space-between;
    .logo {
        height: 60px;
        line-height: 60px;
        font-size: 60px;
        color: rgb(212, 175, 55);
        font-weight: bold;
    }
    .menu {
        a {
            margin: 0 10px;
            color: #ccc;
            cursor: pointer;
            &:hover {
                text-decoration: none;
            }
        }
        .active {
            color: rgb(212, 175, 55);
        }
    }
}
</style>
