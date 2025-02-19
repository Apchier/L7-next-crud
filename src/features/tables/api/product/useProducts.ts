import { axiosInstance } from "@/lib/axios/client"
import type { ApiResponse, QueryResponse } from "@/types/api"
import type { Product } from "../../types/type"
import { useQuery } from "@tanstack/react-query"

const getProducts = async () => {
    const response = await axiosInstance.get<ApiResponse<QueryResponse<Product[]>>>('/products')
    return response.data
}

export const useProducts = () => {
    return useQuery({
        queryKey: ["product"],
        queryFn: getProducts
    })
}