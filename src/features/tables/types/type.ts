import type { z } from "zod";
import type { createCategoryFormSchema, createProductFormSchema, updateCategoryFormSchema } from "../schemas";

export type Product = {
    id?: number,
    name: string,
    price: string,
    category: Category,
    category_id?: string,
    description?: string,
    image?: string
}

export type Category = {
    id: string;
    name: string;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    product: Product[]
}

export type CreateCategoryFormSchema = z.infer<typeof createCategoryFormSchema>
export type UpdateCategoryFormSchema = z.infer<typeof updateCategoryFormSchema>

export type CreateProductFormSchema = z.infer<typeof createProductFormSchema>