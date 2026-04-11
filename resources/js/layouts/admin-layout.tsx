import * as React from 'react';

import { AdminHeader } from '@/layouts/partials/admin/header';

import { AdminFooter } from './partials/admin/footer';
import { AdminSidebar } from './partials/admin/sidebar';

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

    return (
        <div className="flex min-h-screen">
            <AdminSidebar isCollapsed={isSidebarCollapsed} />
            <div className="flex flex-1 flex-col">
                <AdminHeader
                    onToggleSidebar={() =>
                        setIsSidebarCollapsed(!isSidebarCollapsed)
                    }
                />
                <main className="flex-1">{children}</main>
                <AdminFooter />
            </div>
        </div>
    );
}
