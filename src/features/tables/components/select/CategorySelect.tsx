import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { renderElements } from "@/utils/render-elements";
import { useEffect, useState } from "react";
import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import { useCategory } from "../../api/category/useCategory";

type CustomerSelectProps<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
};

export const CategorySelect = <T extends FieldValues>({
    name,
    label,
}: CustomerSelectProps<T>) => {
    const form = useFormContext<T>();
    const { data: category, isLoading: isCategoryLoading } = useCategory()
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        if (form.control && category && !isCategoryLoading) {
            setIsReady(true);
        }
    }, [form.control, category, isCategoryLoading]);

    if (!isReady) {
        return (
            <div className="space-y-4">
                <Skeleton className="h-5 w-44" />
                <Skeleton className="h-9 w-full" />
            </div>
        );
    }

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field: { value, onChange } }) => (
                <FormItem>
                    <FormLabel>{label ?? "Pilih kategori"}</FormLabel>
                    <Select
                        onValueChange={onChange}
                        value={value ?? ""}
                        defaultValue={value}
                    >
                        <FormControl>
                            <SelectTrigger className="capitalize">
                                <SelectValue placeholder="Pilih kategori" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {renderElements({
                                of: category?.data.data,
                                keyExtractor: (categories) => categories.id,
                                render: (categories) => (
                                    <SelectItem
                                        key={categories.id}
                                        value={categories.id}
                                        className="capitalize"
                                    >
                                        {categories.name}
                                    </SelectItem>
                                ),
                                fallback: (
                                    <SelectItem value={""}>
                                        Tidak ada data kategori tersedia
                                    </SelectItem>
                                ),
                            })}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};