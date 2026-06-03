<template>
    <div class="home">
        <PageTitle>Works</PageTitle>

        <div class="main">
            <div
                class="workWrapper"
                v-for="item in sortWorks"
                :key="item.id"
                @click="handleWorkInfo(item.id)"
            >
                <div class="work">
                    <img :src="item.imageUrl" alt="" />
                </div>
                <div class="title">{{ item.title }}</div>
                <div class="content">{{ item.content }}</div>
                <button class="viewBtn">view more</button>
                <div class="overlay">
                    <div class="iconWrapper">
                        <el-icon :size="50" :color="'white'"><Link /></el-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PageTitle from "@/ccomponents/PageTitle.vue";
import { ref, computed, onMounted } from "vue";
import type { WorkDate } from "@/utils/type";
import { getWorksApi } from "@/apis/works";
import { useRouter } from "vue-router";

const router = useRouter();

const works = ref<WorkDate[]>([]);

const getWorkS = async () => {
    try {
        const res = await getWorksApi();
        works.value = res.data;
    } catch (error) {
        console.log(error);
    }
};

const sortWorks = computed(() => {
    return [...works.value].reverse();
});

const handleWorkInfo = (id: number) => {
    router.push(`/workInfo/${id}`);
};

onMounted(() => {
    getWorkS();
});
</script>

<style scoped lang="scss">
.main {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;

    .workWrapper {
        @include box(100%, auto);
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        border-radius: 30px;
        &:hover {
            .work {
                transform: scale(1.2);
            }
        }
        .work {
            @include box(100%, 300px);
            overflow: hidden;
            transition: all 0.3s ease-in-out;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }
        }
        .title {
            @include box(100%, 50px);
            background: #fff;
            line-height: 50px;
            font-size: 15px;
            padding: 0 10px;
            font-size: 25px;
        }
        .content {
            @include box(100%, 60px);
            padding: 10px;
            line-height: 25px;
            font-size: 15px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .viewBtn {
            @include box(50%, auto);
            padding: 10px;
            border-radius: 8px;
            background: rgb(212, 175, 55);
            color: white;
            margin: 10px auto;
            cursor: pointer;
            display: block;
            margin-top: 30px;
            margin-bottom: 30px;
        }
        .overlay {
            @include box(100%, 100%);
            position: absolute;
            top: 0px;
            left: 0;
            z-index: 10;
            background: rgba(0, 0, 0, 0.8);
            transform: translateY(100%);
            transition: all 0.3s ease-in-out;
            opacity: 0;
            @include flex;

            .iconWrapper {
                @include box(60px, 60px);
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                @include flex;
                cursor: pointer;
            }
        }
    }
}
</style>
