import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { UpdateCategoryFormSchema } from "../../types/type"
import { useFormContext } from "react-hook-form"

type EditCategoryFormInnerProps = {
    formID: string,
    onSubmit: (values: UpdateCategoryFormSchema) => void
}

export const EditCategoryFormInner = ({
    formID,
    onSubmit
}: EditCategoryFormInnerProps) => {

    const form = useFormContext<UpdateCategoryFormSchema>()

    return (
        <form id={formID} onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
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