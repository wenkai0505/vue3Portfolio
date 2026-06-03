<template>
    <div class="pagetTitle">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.pagetTitle {
    @include box(100%, 80px);
    margin-top: 50px;
    margin-bottom: 50px;
    @include flex;
    p {
        font-size: 60px;
        border-bottom: 2px solid black;
        line-height: 80px;
        font-weight: 600;
    }

    @include mobile {
        height: 40px;
        p {
            font-size: 30px;
            line-height: 40px;
        }
    }
}
</style>
