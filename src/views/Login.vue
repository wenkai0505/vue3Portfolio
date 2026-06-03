<template>
    <div class="login">
        <div class="main">
            <div class="title">Login</div>
            <div class="form">
                <el-form
                    label-position="top"
                    :model="loginForm"
                    :rules="rules"
                    ref="ruleFormRef"
                >
                    <el-form-item label="email" prop="email">
                        <el-input
                            class="input"
                            v-model="loginForm.email"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="password" prop="password">
                        <el-input
                            class="input"
                            v-model="loginForm.password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <button
                            class="submitBtn"
                            @click="submitForm(ruleFormRef)"
                            type="button"
                        >
                            SUBMIT
                        </button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { LoginPayload } from "@/utils/type";
import type { FormInstance } from "element-plus";
import { getUsersApi } from "@/apis/works";
import { useRouter } from "vue-router";

const router = useRouter();

const ruleFormRef = ref<FormInstance>();

const loginForm = ref<LoginPayload>({
    email: "",
    password: "",
});

const rules = reactive({
    email: [{ required: true, message: "Please input email", trigger: "blur" }],
    password: [
        { required: true, message: "Please input password", trigger: "blur" },
    ],
});

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
        if (valid) {
            const data = {
                email: loginForm.value.email,
                password: loginForm.value.password,
            };
            try {
                const res = await getUsersApi();
                const user = res.data.find((item: any) => {
                    return (
                        item.email === data.email &&
                        item.password === data.password
                    );
                });

                if (user) {
                    localStorage.setItem("user", JSON.stringify(user));

                    //@ts-ignore
                    ElMessage({
                        message: "登入成功",
                        type: "success",
                    });
                    router.push("/");
                } else {
                    //@ts-ignore
                    ElMessage({
                        message: "帳號或密碼錯誤",
                        type: "error",
                    });
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            //@ts-ignore
            ElMessage({
                message: "操作錯誤",
                type: "error",
            });
        }
    });
};
</script>

<style scoped lang="scss">
.login {
    @include flex;
    @include box(100%, 100vh);
    background: #f8f9fa;
    .main {
        @include box(100%, auto);
        max-width: 400px;
        background: white;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 20px;
        .title {
            @include box(100%, 50px);
            font-size: 40px;
            font-weight: 900;
        }
        .input {
            @include box(100%, 50px);
            :deep(.el-input__wrapper) {
                border-radius: 8px;
                padding: 10px 14px;
                border: 1px solid #ccc;
                transition: all 0.2s ease;
                &:focus-within {
                    border-color: rgb(212, 175, 55);
                    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.3);
                }
            }
        }
        .submitBtn {
            display: black;
            @include box(100%, auto);
            padding: 10px 20px;
            background: rgb(212, 175, 55);
            margin-top: 30px;
            border-radius: 8px;
            color: white;
            cursor: pointer;
            transition: all 0.2s ease;
            &:hover {
                background: rgb(212, 175, 55);
                box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.3);
            }
        }
    }
}
</style>
