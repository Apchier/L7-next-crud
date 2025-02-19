import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { CreateCategoryFormSchema } from "../../types/type"
import { useFormContext } from "react-hook-form"

type CreateCategoryFormInnerProps = {
    categoryID: string,
    onSubmit: (values: CreateCategoryFormSchema) => void
}

export const CreateCategoryFormInner = ({
    categoryID,
    onSubmit
}: CreateCategoryFormInnerProps) => {

    const form = useFormContext<CreateCategoryFormSchema>()

    return (
        <form id={categoryID} onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter category name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </form>
    )
}