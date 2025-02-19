import { z } from "zod";

export const createCategoryFormSchema = z.object({
    name: z
        .string()
        .min(1, "Category must be not null")
        .max(100, "Maximum 100 characters"),
})

export const updateCategoryFormSchema = createCategoryFormSchema.partial()

export const createProductFormSchema = z.object({
    name: z
        .string()
        .min(1, "Category must be not null")
        .max(100, "Maximum 100 characters"),
    price: z
        .string()
        .min(1, "Category must be not null"),
    category_id: z
        .string()
        .optional()
})