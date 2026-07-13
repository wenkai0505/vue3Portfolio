export interface WorkPayload {
    title: string;
    content: string;
    url: string;
    tags: string[];
    imageUrl: string;
}

export interface WorkDate {
    id: number;
    imageUrl: string;
    title: string;
    content: string;
    url: string;
    tags: string[];
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface UserDate {
    id: number;
    name: string;
    email: string;
    password: string;
}
