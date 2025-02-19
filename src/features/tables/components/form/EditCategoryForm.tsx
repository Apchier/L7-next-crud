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
    categoryID: string
}

export const EditCategoryForm = ({ categoryID }: EditCategoryPageProps) => {
    const router = useRouter()
    const { data: category } = useCategories(categoryID)

    const form = useForm<UpdateCategoryFormSchema>({
        defaultValues: {
            name: ""
        },
        resolver: zodResolver(updateCategoryFormSchema),
    })

    const { mutate: updateCategory } = useUpdateCategories({
        onSuccess: () => {
            router.push('/dashboard/tables/category')
            toast.success("Category updated successfully")
        },
        onError: () => {
            toast.error("Category update failed")
        }
    })

    const onSubmit = (values: UpdateCategoryFormSchema) => updateCategory({ id: categoryID, values })

    useEffect(() => {
        if (category) {
            form.reset({ name: category.name })
            console.log('CategoryID in EditCategoryForm:', categoryID)
        }
    }, [form, category, categoryID])

    return (
        <Form {...form}>
            <EditCategoryFormInner formID="edit-category-form" onSubmit={onSubmit} />
        </Form>
    )
}