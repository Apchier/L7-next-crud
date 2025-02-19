import { Toaster as Sooner } from "sonner";
import { Providers } from "./providers/Providers";
import { Toaster } from "../ui/toaster";

type MainLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ 
    children,
}) => {
    return (
        <Providers>
            {children}
            <Sooner position="top-center" />
            <Toaster />
        </Providers>
    )
}