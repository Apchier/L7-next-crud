import type { ApiResponse } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "../../types/type";
import { axiosInstance } from "@/lib/axios/client";

const getProductByID = async (id?: string) => {
    if (!id) throw new Error("id is required");
    const response = await axiosInstance.get<ApiResponse<Product>>(
        `/products/${id}`,
    );
    return response.data.data
};

export const useProductByID = (id: string) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductByID(id),
        enabled: !!id,
    });
};
