import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { renderElements } from "@/utils/render-elements"
import { useCategory } from "../../api/category/useCategory"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Pencil } from "lucide-react"
import { DeleteCategoryDialog } from "../dialog/DeleteCategoryDialog"

export const CategoryTableBody = () => {
    const { data: categories } = useCategory()

    return (
        <TableBody>
            {renderElements({
                of: categories?.data,
                render: (category, index) => (
                    <TableRow key={category.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{category.name}</TableCell>
                        <TableCell className="flex justify-center items-center gap-2">
                            <Link href={`#`}>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                                >
                                    <Eye className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href={`/dashboard/tables/category/${category.id}/edit`}>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 text-yellow-500 hover:text-yellow-600 hover:bg-yellow-50"
                                >
                                    <Pencil className="h-4 w-4" />
                                </Button>
                            </Link>
                            <DeleteCategoryDialog categoryID={category.id} />
                        </TableCell>
                    </TableRow>
                ),
            })}
        </TableBody>
    )
}