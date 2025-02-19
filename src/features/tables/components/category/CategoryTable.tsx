import {
    Table,
    TableCaption,
} from "@/components/ui/table";
import { CreateCategoryDialog } from "../dialog/CreateCategoryDialog";
import { CategoryTableHeader } from "./CategoryTableHeader";
import { CategoryTableBody } from "./CategoryTableBody";
import { CategoryTableFooter } from "./CategoryTableFooter";

export function CategoryTable() {

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between py-4 bg-white rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800">Category Table</h1>
                <CreateCategoryDialog />
            </div>

            <Table className="w-full">
                <TableCaption>A list of product categories.</TableCaption>
                <CategoryTableHeader />
                <CategoryTableBody />
                <CategoryTableFooter />
            </Table>
        </div>
    )
}
