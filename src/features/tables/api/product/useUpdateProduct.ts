import type { ApiProps, ApiResponse } from "@/types/api"
import { useMutation } from "@tanstack/react-query"
import type { Product, UpdateProductFormSchema, } from "../../types/type"
import { axiosInstance } from "@/lib/axios/client"

const updateProduct = async ({id, values}: {id?: string, values: UpdateProductFormSchema}) => {
    if (!id) throw new Error('id is required')

    const response = await axiosInstance.patch<ApiResponse<Product>>(`/products/${id}`, values)
    return response.data.data
}

export const useUpdateProduct = ({ onSuccess, onError, onMutate }: ApiProps<string>) => {
    return useMutation({
        mutationKey: ['mutate', 'update', 'product'],
        mutationFn: updateProduct,
        onSuccess,
        onError,
        onMutate
    })
}