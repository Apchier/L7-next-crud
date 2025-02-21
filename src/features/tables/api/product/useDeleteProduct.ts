
import type { ApiProps, ApiResponse } from "@/types/api"
import { useMutation } from "@tanstack/react-query"
import type { Product } from "../../types/type"
import { axiosInstance } from "@/lib/axios/client"


const deleteProduct = async (id?: string) => {
    const response = await axiosInstance.delete<ApiResponse<Product>>(`/products/${id}`)
    return response.data.data
}

export const useDeleteProduct = ({onSuccess, onError, onMutate}: ApiProps) => {
    return useMutation({
        mutationKey: ['mutate', 'delete', 'product'],
        mutationFn: deleteProduct,
        onSuccess,
        onError,
        onMutate,
    })
}