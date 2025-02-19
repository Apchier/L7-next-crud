import { PageContainer } from "@/components/layouts/PageContainer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EditCategoryForm } from "../components/form/EditCategoryForm"

type EditCategoryPageProps = {
    params: Promise<{ categoryID: string }>
}

export const EditCategoryPage = async ({params}: EditCategoryPageProps) => {
    const categoryID = (await params).categoryID

    return (
        <PageContainer title="Edit Category - Page">
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Plan Your Day</CardTitle>
                        <p className="text-sm text-gray-500">Stay organized with your daily tasks</p>
                    </CardHeader>
                    <CardContent className="w-full flex items-center justify-center gap-2">
                        <EditCategoryForm categoryID={categoryID} />
                        <Button id="edit-category-form" form="edit-category-form" type="submit" className="bg-black text-white">
                            Update
                        </Button>
                    </CardContent>
                </Card>
        </PageContainer>
    )
}