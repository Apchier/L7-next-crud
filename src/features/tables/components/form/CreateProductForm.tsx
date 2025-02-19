import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { CreateProductFormSchema } from "../../types/type"
import { createProductFormSchema } from "../../schemas"
import { toast } from "sonner"
import { useProducts } from "../../api/product/useProducts"
import { useCreateProduct } from "../../api/product/useCreateProduct"
import { CreateProductFormInner } from "./CreateProductFormInner"

export const CreateProductForm = () => {
    const form = useForm<CreateProductFormSchema>({
        defaultValues: {
            name: "",
            price: "",
            category_id: "",
        },
        resolver: zodResolver(createProductFormSchema),
    })

    const { refetch } = useProducts()

    const { mutate: createProduct } = useCreateProduct({
        onSuccess: () => {
            form.reset()
            toast.success("Product created successfully")
            void refetch()
        },
    })

    const onSubmit = (values: CreateProductFormSchema) => createProduct(values)

    return (
        <Form {...form}>
            <CreateProductFormInner productID="create-product-form" onSubmit={onSubmit} />
        </Form>
    )
}