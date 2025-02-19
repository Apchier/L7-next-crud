import { useMutation } from "@tanstack/react-query";
import type { Category, CreateCategoryFormSchema } from "../../types/type";
import type { ApiProps, ApiResponse } from "@/types/api";
import { axiosInstance } from "@/lib/axios/client";


const createCategories = async (values: CreateCategoryFormSchema) => {
    const response = await axiosInstance.post<ApiResponse<Category>>("/categories", values)
    return response.data.data
};

export const useCreateCategories = ({ onSuccess, onError, onMutate }: ApiProps) => {
    return useMutation({
        mutationKey: ["mutate", "create", "categories"],
        mutationFn: createCategories,
        onSuccess,
        onError,
        onMutate,
    });
};
