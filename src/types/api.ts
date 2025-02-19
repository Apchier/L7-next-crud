import type { ZodError } from "zod";

export type Meta = {
    total: number;
    page: number;
    last_page: number;
    limit: number;
}

export type ApiResponse<T> = {
    status: boolean;
    statusCode: number;
    message: string;
    data: T;
    errors?: string;
    details?: ZodError;
}

export type MetaProps = {
    total: number;
    page: number;
    last_page: number;
    limit: number;
};

export type QueryResponse<T> = {
    meta: MetaProps;
    data: T;
}

export type ApiProps<T = undefined> = {
    id?: T;
    onSuccess?: () => void;
    onError?: () => void;
    onMutate?: () => void;
}