<template>
    <div class="workInfo">
        <Header />
        <div class="main">
            <div class="goBack" @click="handleGoBack">< 返回</div>
            <div class="title">{{ workInfo?.title }}</div>
            <div class="workImg">
                <img :src="workInfo?.imageUrl" alt="" />
            </div>
            <div class="content">{{ workInfo?.content }}</div>
            <div class="url">
                <apsn>參考網址：</apsn
                ><a :href="workInfo?.url" target="_blank">{{
                    workInfo?.url
                }}</a>
            </div>
            <div class="tags">
                <span>相關技術：</span>
                <span class="tag" v-for="tag in workInfo?.tags" :key="tag">
                    {{ tag }}
                </span>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from "@/ccomponents/Header.vue";
import Footer from "@/ccomponents/Footer.vue";
import { getWorkByIdApi } from "@/apis/works";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import type { WorkDate } from "@/utils/type";

const route = useRoute();
const router = useRouter();

const workInfo = ref<WorkDate>();

const getWorkById = async () => {
    try {
        const id = route.params.id;
        const res = await getWorkByIdApi(id as string);
        workInfo.value = res.data;
    } catch (error) {
        console.log(error);
    }
};

const handleGoBack = () => {
    router.back();
};
onMounted(() => {
    getWorkById();
});
</script>

<style scoped lang="scss">
.workInfo {
    .header {
        position: relative;
        background: black;
    }
    .main {
        @include box(100%, auto);
        margin: 0 auto;
        max-width: 1000px;
        @include flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-bottom: 50px;
        .goBack {
            @include box(100%, 59px);
            line-height: 59px;
            font-size: 20px;
            color: rgb(212, 175, 55);
            cursor: pointer;
        }
        .title {
            @include box(100%, 50px);
            font-size: 30px;
            font-weight: 900;
            margin-top: 20px;
        }
        .workImg {
            @include box(100%, 600px);
            overflow: hidden;
            @include mobile {
                height: 300px;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }
        }
        .content {
            @include box(100%, auto);
            padding: 20px;
            line-height: 25px;
            font-size: 15px;
        }
        .url {
            @include box(100%, 50px);
            padding: 20px;
            line-height: 25px;
            font-size: 15px;
            a {
                color: rgb(212, 175, 55);
            }
        }
        .tags {
            @include box(100%, auto);
            padding: 20px;
            line-height: 25px;
            font-size: 15px;
            @include flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            .tag {
                background: rgb(212, 175, 55);
                color: #fff;
                padding: 5px 10px;
                border-radius: 8px;
                margin-right: 10px;
                margin-bottom: 20px;
            }
        }
        @include mobile {
            width: 90%;
        }
    }
}
</style>
