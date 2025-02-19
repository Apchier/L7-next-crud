import { axiosInstance } from "@/lib/axios/client";
import type { ApiResponse, QueryResponse } from "@/types/api";
import type { Category } from "../../types/type";
import { useQuery } from "@tanstack/react-query";

const getCategory = async () => {
    const response = await axiosInstance.get<ApiResponse<QueryResponse<Category[]>>>('/categories')
    return response.data
}

export const useCategory = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategory
    })
}