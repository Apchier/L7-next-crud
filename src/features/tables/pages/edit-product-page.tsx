import { PageContainer } from "@/components/layouts/PageContainer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EditProductForm } from "../components/form/EditProductForm"

type EditProductPageProps = {
    params: Promise<{ id: string }>
}

export const EditProductPage = async ({params}: EditProductPageProps) => {
    const id = (await params).id

    return (
        <PageContainer title="Edit Product - Page">
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Plan Your Day</CardTitle>
                        <p className="text-sm text-gray-500">Stay organized with your daily tasks</p>
                    </CardHeader>
                    <CardContent className="w-full flex items-center justify-center gap-2">
                        <EditProductForm id={id} />
                        <Button id="edit-product-form" form="edit-product-form" type="submit" className="bg-black text-white">
                            Update
                        </Button>
                    </CardContent>
                </Card>
        </PageContainer>
    )
}