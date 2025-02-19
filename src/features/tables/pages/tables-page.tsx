'use client'
import { PageContainer } from "@/components/layouts/PageContainer";
import { TabTable } from "../components/tabs/TabsTable";

export const TablesPage = () => {

    return (
        <PageContainer title="Tables - Page" className='flex flex-col gap-4'>
            <TabTable/>
        </PageContainer>
    );
}
