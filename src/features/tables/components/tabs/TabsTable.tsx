"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { CategoryTable } from "../category/CategoryTable";
import { ProductTable } from "../product/ProductTable";

export const TabTable = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Ambil tab dari URL, jika tidak ada default ke "products"
    const defaultTab = searchParams.get("tab") ?? "Categories";
    const [activeTab, setActiveTab] = useState(defaultTab);

    // Update URL saat tab berubah
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        router.push(`?tab=${tab}`, { scroll: false }); // Update URL tanpa refresh halaman
    };

    // Sync state dengan URL jika URL berubah langsung
    useEffect(() => {
        if (searchParams.get("tab")) {
            setActiveTab(searchParams.get("tab")!);
        }
    }, [searchParams]);

    return (
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
            {/* Tabs Navigation */}
            <TabsList className="flex space-x-2">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
            </TabsList>

            <TabsContent value="categories">
                <CategoryTable />
            </TabsContent>
            <TabsContent value="products">
                <ProductTable />
            </TabsContent>
        </Tabs>
    );
};