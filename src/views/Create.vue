<template>
    <div class="create">
        <PageTitle>Create a New Work</PageTitle>
        <div class="main">
            <form class="form">
                <div class="formItem">
                    <label class="label" for="title">Works name</label>
                    <div class="inputWrapper">
                        <input
                            type="text"
                            id="title"
                            v-model="worekData.title"
                            required
                        />
                    </div>
                </div>
                <div class="formItem">
                    <label class="label" for="content">Description</label>
                    <div class="inputWrapper">
                        <textarea
                            rows="5"
                            id="content"
                            v-model="worekData.content"
                            style="width: 100%"
                        />
                    </div>
                </div>
                <div class="formItem">
                    <label class="label" for="url">Links </label>
                    <div class="inputWrapper">
                        <input type="text" id="url" v-model="worekData.url" />
                    </div>
                </div>
                <div class="formItem">
                    <label class="label" for="tag">Technology </label>
                    <div class="inputWrapper">
                        <input
                            type="text"
                            id="tag"
                            v-model="tag"
                            @keydown.enter="handleKeyDown"
                        />
                    </div>
                </div>
                <div class="tagWrapper">
                    <div class="tag" v-for="tag in worekData.tags" :key="tag">
                        {{ tag }}
                    </div>
                </div>
                <div class="formItem">
                    <label class="label" for="file">Upload Image </label>
                    <div class="btnWrapper">
                        <UploadBtn
                            @uploaded="handleUploaded"
                            @deleted="handleDeleted"
                        />
                    </div>
                </div>
            </form>
            <div class="buttomBox">
                <button class="btn clear" @click="handleClear">清除</button>
                <button class="btn create" @click="handleSubmit">新增</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PageTitle from "@/ccomponents/PageTitle.vue";
import { ref } from "vue";
import type { WorkPayload } from "@/utils/type";
import { createWorksApi } from "@/apis/works";
import { useRouter } from "vue-router";
import UploadBtn from "@/ccomponents/UploadBtn.vue";

const router = useRouter();

const tag = ref("");
const worekData = ref<WorkPayload>({
    title: "",
    content: "",
    url: "",
    tags: [],
    imageUrl: "",
});

const handleKeyDown = () => {
    if (worekData.value.tags.includes(tag.value)) {
        return;
    }
    if (tag.value) {
        worekData.value.tags.push(tag.value);
        tag.value = "";
    }
};

const handleUploaded = (url: string) => {
    worekData.value.imageUrl = url;
};

const handleDeleted = () => {
    worekData.value.imageUrl = "";
};

const handleClear = () => {
    worekData.value.title = "";
    worekData.value.content = "";
    worekData.value.url = "";
    worekData.value.tags = [];
    worekData.value.imageUrl = "";
    tag.value = "";
};

const handleSubmit = async () => {
    const data = {
        title: worekData.value.title,
        content: worekData.value.content,
        url: worekData.value.url,
        tags: worekData.value.tags,
        imageUrl: worekData.value.imageUrl,
    };

    try {
        const res = await createWorksApi(data);
        //@ts-ignore
        ElMessage({
            message: "新增成功",
            type: "success",
        });
        router.push("/");
    } catch (error) {
        console.log(error);
        //@ts-ignore
        ElMessage({
            message: "新增失敗",
            type: "error",
        });
    }
};
</script>

<style scoped lang="scss">
.main {
    @include box(100%, auto);
    max-width: 500px;
    margin: 0 auto;
    .form {
        margin-top: 20px;
        .formItem {
            @include flex;
            margin-bottom: 20px;
            .label {
                flex: 1;
            }
            .inputWrapper {
                flex: 3;
                border: 1px solid #ccc;
                padding: 10px;
                transition: all 0.2s ease;
                border-radius: 8px;
                input {
                    width: 100%;
                }
            }
            .inputWrapper:focus-within {
                border-color: rgb(212, 175, 55);
                box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.3);
            }
            .btnWrapper {
                flex: 3;
            }
            @include mobile {
                flex-direction: column;
                .label {
                    height: 40px;
                    line-height: 40px;
                    width: 100%;
                }
                .inputWrapper {
                    width: 100%;
                }
            }
        }
        .tagWrapper {
            @include flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 10px;
            margin-bottom: 20px;
            .tag {
                padding: 5px 10px;
                background: #d5add3;
                border-radius: 8px;
            }
        }
    }
    .buttomBox {
        @include box(100%, 100px);
        margin-top: 10px;
        @include flex;
        justify-content: center;
        gap: 10px;
        .btn {
            @include box(100px, 50px);
            border-radius: 8px;
            cursor: pointer;
            flex: 1;
            &.clear {
                background: #ccc;
                color: #000;
            }
            &.create {
                background: rgb(212, 175, 55);
                color: #fff;
            }
        }
    }
}
</style>
