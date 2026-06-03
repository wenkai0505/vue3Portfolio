<template>
    <div class="Layout">
        <Header />
        <div class="banner">
            <div class="top">
                <p class="title">Code with Purpose, Design with Passion.</p>
                <p class="subTitle">
                    將複雜的思緒梳理成優雅的秩序，在看不見的細節裡點亮驚喜。
                </p>
            </div>
        </div>
        <div class="main">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from "@/ccomponents/Header.vue";
import Footer from "@/ccomponents/Footer.vue";
</script>

<style scoped lang="scss">
.banner {
    @include box(100%, 700px);
    background: url("@/assets/images/banner.jpg") no-repeat center;
    background-size: cover;
    position: relative;
    .top {
        @include box(100%, 100%);
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        @include flex;
        flex-direction: column;
        .title {
            width: 90%;
            font-size: 50px;
            color: #fff;
            font-weight: 900;
            text-align: center;
            margin-bottom: 20px;
        }
        .subTitle {
            font-size: 15px;
            color: #fff;
        }
    }
    @include mobile {
        height: 500px;
        .top {
            .subTitle {
                display: none;
            }
        }
    }
}

.main {
    @include box(100%, auto);
    max-width: 1280px;
    padding: 0 20px;
    margin: 0 auto;
    margin-bottom: 50px;
}
</style>
