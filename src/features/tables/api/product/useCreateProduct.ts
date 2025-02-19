import { axiosInstance } from "@/lib/axios/client";
import type { ApiProps, ApiResponse } from "@/types/api";
import type { CreateProductFormSchema, Product } from "../../types/type";
import { useMutation } from "@tanstack/react-query";

const createProduct = async (values: CreateProductFormSchema) => {
    const response = await axiosInstance.post<ApiResponse<Product>>(
        "/products",
        values,
    );
    return response.data;
};

export const useCreateProduct = ({onSuccess, onError, onMutate}: ApiProps) => {
    return useMutation({
        mutationKey: ["mutate", "create", "products"],
        mutationFn: createProduct,
        onSuccess,
        onError,
        onMutate,
    });
};
