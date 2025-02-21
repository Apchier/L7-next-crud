'use client'
import { Form } from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import type { UpdateProductFormSchema } from "../../types/type"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useEffect } from "react"
import { useProductByID } from "../../api/product/useProductByID"
import { updateProductFormSchema } from "../../schemas"
import { useUpdateProduct } from "../../api/product/useUpdateProduct"
import { EditProductFormInner } from "./EditProductFormInner"

type EditProductPageProps = {
    id: string
}

export const EditProductForm = ({ id }: EditProductPageProps) => {
    const router = useRouter()
    const { data: product } = useProductByID(id)

    const form = useForm<UpdateProductFormSchema>({
        defaultValues: {
            name: "",
            price: "",
            category_id: "",
        },
        resolver: zodResolver(updateProductFormSchema),
    })

    const { mutate: updateProduct } = useUpdateProduct({
        onSuccess: () => {
            router.push('/dashboard/tables')
            toast.success("Product updated successfully")
        },
        onError: () => {
            toast.error("Product update failed")
        }
    })

    const onSubmit = (values: UpdateProductFormSchema) => updateProduct({ id, values })

    useEffect(() => {
        if (product) {
            form.reset({ name: product.name, price: product.price, category_id: product.category_id })
        }
    }, [form, product, id])

    return (
        <Form {...form}>
            <EditProductFormInner formID="edit-product-form" onSubmit={onSubmit} />
        </Form>
    )
}