import http from "@/utils/http";
import type { WorkPayload } from "@/utils/type";

//獲取works
export const getWorksApi = async () => {
    return http.get("/works");
};

export const getWorkByIdApi = (id: string) => {
    return http.get(`/works/${id}`);
};

//新增works
export const createWorksApi = (data: WorkPayload) => {
    return http.post("/works", data);
};

//獲取users
export const getUsersApi = () => {
    return http.get("/users");
};
