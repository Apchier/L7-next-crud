import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { CreateCategoryFormSchema } from "../../types/type"
import { createCategoryFormSchema } from "../../schemas"
import { useCategory } from "../../api/category/useCategory"
import { useCreateCategories } from "../../api/category/useCreateCategories"
import { toast } from "sonner"
import { CreateCategoryFormInner } from "./CreateCategoryFormInner"

export const CreateCategoryForm = () => {
    const form = useForm<CreateCategoryFormSchema>({
        defaultValues: {
            name: "",
        },
        resolver: zodResolver(createCategoryFormSchema),
    })

    const refetch = useCategory()

    const { mutate: createCategories } = useCreateCategories({
        onSuccess() {
            form.reset()
            toast.success("Category created successfully")
            void refetch.refetch()
        },
    })

    const onSubmit = (values: CreateCategoryFormSchema) => createCategories(values)
    return (
        <Form {...form}>
            <CreateCategoryFormInner categoryID="create-category-form" onSubmit={onSubmit}/>
        </Form>
    )
}