'use client'
import { Form } from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { useCategories } from "../../api/category/useCategories"
import { useForm } from "react-hook-form"
import type { UpdateCategoryFormSchema } from "../../types/type"
import { updateCategoryFormSchema } from "../../schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUpdateCategories } from "../../api/category/useUpdateCategories"
import { toast } from "sonner"
import { useEffect } from "react"
import { EditCategoryFormInner } from "./EditCategoryFormInner"

type EditCategoryPageProps = {
    id: string
}

export const EditCategoryForm = ({ id }: EditCategoryPageProps) => {
    const router = useRouter()
    const { data: category } = useCategories(id)

    console.log(id)

    const form = useForm<UpdateCategoryFormSchema>({
        defaultValues: {
            name: ""
        },
        resolver: zodResolver(updateCategoryFormSchema),
    })

    const { mutate: updateCategory } = useUpdateCategories({
        onSuccess: () => {
            router.push('/dashboard/tables')
            toast.success("Category updated successfully")
        },
        onError: () => {
            toast.error("Category update failed")
        }
    })

    const onSubmit = (values: UpdateCategoryFormSchema) => updateCategory({ id, values })

    useEffect(() => {
        if (category) {
            form.reset({ name: category.name })
        }
    }, [form, category, id])

    return (
        <Form {...form}>
            <EditCategoryFormInner formID="edit-category-form" onSubmit={onSubmit} />
        </Form>
    )
}