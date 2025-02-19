import {
    Table,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ProductTableBody } from "./ProductTableBody";
import { CreateProductDialog } from "../dialog/CreateProductDialog";

export function ProductTable() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between px-4 py-5 bg-white rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Product Table</h1>
                <CreateProductDialog/>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Table>
                    <TableCaption className="pb-4">A list of your products.</TableCaption>
                    <TableHeader>
                        <TableRow className="border-b border-gray-200 bg-gray-50">
                            <TableHead className="w-[50px] py-3 px-4 text-sm font-medium text-gray-900">No</TableHead>
                            <TableHead className="py-3 px-4 text-sm font-medium text-gray-900">Name</TableHead>
                            <TableHead className="py-3 px-4 text-sm font-medium text-gray-900">Category</TableHead>
                            <TableHead className="py-3 px-4 text-sm font-medium text-gray-900 text-left">Price</TableHead>
                            <TableHead className="w-[120px] py-3 px-4 text-sm font-medium text-gray-900 text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <ProductTableBody />
                    <TableFooter>
                        <TableRow className="border-t border-gray-200 bg-gray-50">
                            <TableCell colSpan={4} className="py-4 px-4 text-sm font-medium text-gray-900">Total</TableCell>
                            <TableCell className="py-4 px-4 text-sm font-medium text-gray-900 text-right">$1,000.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    );
}