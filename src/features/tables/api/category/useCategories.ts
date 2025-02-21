import type { ApiResponse } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import type { Category } from "../../types/type";
import { axiosInstance } from "@/lib/axios/client";

const getCategories = async (id?: string) => {
    if (!id) throw new Error("id is required");
    const response = await axiosInstance.get<ApiResponse<Category>>(
        `/categories/${id}`,
    );
    return response.data.data;
};

export const useCategories = (id?: string) => {
    return useQuery({
        queryKey: ["categories", id],
        queryFn: () => getCategories(id),
    });
};
