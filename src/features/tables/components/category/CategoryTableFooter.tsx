import { TableCell, TableFooter, TableRow } from "@/components/ui/table"
import { useCategory } from "../../api/category/useCategory"

export const CategoryTableFooter = () => {
    const { data: category } = useCategory()
    
    return (
        <TableFooter>
            <TableRow>
                <TableCell colSpan={2}>Total Categories</TableCell>
                <TableCell className="text-right">{category?.data?.data?.length}</TableCell>
            </TableRow>
        </TableFooter>
    )
}