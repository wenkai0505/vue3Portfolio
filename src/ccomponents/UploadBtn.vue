<template>
    <div class="upload">
        <label for="file" class="uploadbtn">選擇圖片</label>
        <input
            id="file"
            ref="fileInput"
            type="file"
            hidden
            accept="image/*"
            @change="handleChange"
        />
        <div v-if="previewUrl" class="preview">
            <img :src="previewUrl" alt="preview" />
            <button type="button" class="deleteBtn" @click="removeImage">
                刪除
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { API_BASE_URL } from "@/utils/runtime";

const emit = defineEmits<{
    (e: "uploaded", url: string): void;
    (e: "deleted"): void;
}>();

const previewUrl = ref("");
const fileInput = ref<HTMLInputElement | null>(null);
let currentUrl = "";

// 把圖片送到 upload server
const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        body: formData,
    });
    if (!res.ok) {
        throw new Error("upload failed");
    }
    const data = await res.json();
    return data.url as string;
};

const handleChange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) return;
    // 先做本地預覽
    if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
    }
    currentUrl = URL.createObjectURL(file);
    previewUrl.value = currentUrl;
    // 再上傳到後端
    try {
        const url = await uploadImage(file);
        emit("uploaded", url);
    } catch (error) {
        console.log(error);
        alert("圖片上傳失敗");
    }
};
const removeImage = () => {
    if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
        currentUrl = "";
    }
    previewUrl.value = "";
    if (fileInput.value) {
        fileInput.value.value = "";
    }
    emit("deleted");
};

onBeforeUnmount(() => {
    if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
    }
});
</script>

<style scoped lang="scss">
.uploadbtn {
    height: 40px;
    line-height: 40px;
    display: inline-block;
    padding: 0 16px;
    background: rgb(212, 175, 55);
    color: white;
    border-radius: 8px;
    cursor: pointer;
}
.preview {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.preview img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}
.deleteBtn {
    width: 80px;
    height: 36px;
    border: none;
    border-radius: 8px;
    background: #ff4d4f;
    color: white;
    cursor: pointer;
}
</style>
