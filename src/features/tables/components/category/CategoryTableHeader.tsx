import { TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const CategoryTableHeader = () => {
    return (
        <TableHeader>
            <TableRow className="w-full">
                <TableHead className="w-[50px]">No</TableHead>
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead className="w-[120px] text-center">Action</TableHead>
            </TableRow>
        </TableHeader>
    )
}