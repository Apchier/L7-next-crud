import { Button } from "@/components/ui/button"
import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { renderElements } from "@/utils/render-elements"
import { Eye, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import { useProducts } from "../../api/product/useProducts"

export const ProductTableBody = () => {
    const { data: products } = useProducts()

    return (
        <TableBody>
            {renderElements({
                of: products?.data?.data,
                render: (product, index) => (
                    <TableRow key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <TableCell className="py-4 px-4 text-sm text-gray-500">{index + 1}</TableCell>
                        <TableCell className="py-4 px-4 text-sm text-gray-900 font-medium">{product.name}</TableCell>
                        <TableCell className="py-4 px-4 text-sm text-gray-500">{product.category?.name}</TableCell>
                        <TableCell className="py-4 px-4 text-sm text-gray-900 font-medium text-left">{product.price}</TableCell>
                        <TableCell className="py-4 px-4">
                            <div className="flex justify-center items-center gap-2">
                                <Link href="/">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="#">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 text-yellow-600 border-yellow-200 hover:bg-yellow-50 hover:border-yellow-300"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="#">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </TableCell>
                    </TableRow>
                ),
            })}
        </TableBody>
    )
}