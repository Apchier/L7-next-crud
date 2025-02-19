import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { CreateProductFormSchema } from "../../types/type"
import { useFormContext } from "react-hook-form"
import { CategorySelect } from "../select/CategorySelect"

type CreateProductFormInnerProps = {
  productID: string,
  onSubmit: (values: CreateProductFormSchema) => void
}

export const CreateProductFormInner = ({
  productID,
  onSubmit
}: CreateProductFormInnerProps) => {

  const form = useFormContext<CreateProductFormSchema>()

  return (
    <form id={productID} onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter product name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price</FormLabel>
            <FormControl>
              <Input placeholder="Enter product price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <CategorySelect name="category_id"/>
    </form>
  )
}