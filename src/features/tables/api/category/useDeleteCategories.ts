
import type { ApiProps, ApiResponse } from "@/types/api"
import { useMutation } from "@tanstack/react-query"
import type { Category } from "../../types/type"
import { axiosInstance } from "@/lib/axios/client"


const deleteCategories = async (id?: string) => {
    const response = await axiosInstance.delete<ApiResponse<Category>>(`/categories/${id}`)
    return response.data.data
}

export const useDeleteCategories = ({onSuccess, onError, onMutate}: ApiProps) => {
    return useMutation({
        mutationKey: ['mutate', 'delete', 'categories'],
        mutationFn: deleteCategories,
        onSuccess,
        onError,
        onMutate,
    })
}