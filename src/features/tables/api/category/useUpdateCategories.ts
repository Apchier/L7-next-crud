import type { ApiProps, ApiResponse } from "@/types/api"
import { useMutation } from "@tanstack/react-query"
import type { Product, UpdateCategoryFormSchema } from "../../types/type"
import { axiosInstance } from "@/lib/axios/client"

const updateCategories = async ({id, values}: {id?: string, values: UpdateCategoryFormSchema}) => {
    if (!id) throw new Error('id is required')

    console.log(`ID: ${id}`)
    console.log(values)

    const response = await axiosInstance.patch<ApiResponse<Product>>(`/categories/${id}`, values)
    return response.data
}

export const useUpdateCategories = ({ onSuccess, onError, onMutate }: ApiProps<string>) => {
    return useMutation({
        mutationKey: ['mutate', 'update', 'categories'],
        mutationFn: updateCategories,
        onSuccess,
        onError,
        onMutate
    })
}