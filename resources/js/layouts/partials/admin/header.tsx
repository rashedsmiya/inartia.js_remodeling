import { Link, router, usePage } from '@inertiajs/react';
import { LogOut, Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

import AppLogo from '@/components/app-logo';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useInitials } from '@/hooks/use-initials';
import { type SharedData } from '@/types';

interface AdminHeaderProps {
    isSidebarCollapsed?: boolean;
    onToggleSidebar?: () => void;
}

export function AdminHeader({
    isSidebarCollapsed,
    onToggleSidebar,
}: AdminHeaderProps) {
    const { auth } = usePage<SharedData>().props;
    const admin = auth.admin;
    const getInitials = useInitials();

    if (!admin) {
        return null;
    }

    const handleLogout = () => {
        router.post(route('admin.logout'));
    };

    const adminInfo = (
        <>
            <Avatar className="h-10 w-10 overflow-hidden rounded-full">
                <AvatarFallback className="rounded-lg bg-primary font-montserrat text-lg font-semibold text-white">
                    {getInitials(admin.name)}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="text-text-secondary truncate font-montserrat text-base font-semibold">
                    {admin.name}
                </span>
                <span className="text-text-primary truncate text-base">
                    {admin.email}
                </span>
            </div>
        </>
    );

    const adminMenu = (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    {adminInfo}
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
            </DropdownMenuItem>
        </>
    );

    return (
        <header className="bg-primary-50">
            <div className=" flex items-center justify-between px-4 py-4 text-primary-500">
                <div className="flex items-center gap-4">
                    {onToggleSidebar && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onToggleSidebar}
                            className="hidden md:flex"
                        >
                            {isSidebarCollapsed ? (
                                <PanelLeftOpen className="h-5 w-5" />
                            ) : (
                                <PanelLeftClose className="h-5 w-5" />
                            )}
                        </Button>
                    )}
                    <Link
                        href={route('admin.dashboard')}
                        className="flex items-center gap-2 text-primary-500"
                    >
                        <AppLogo className="h-16 w-auto" />
                    </Link>
                </div>
                <div className="hidden items-center gap-4 md:flex">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex h-auto items-center gap-2 p-2 transition-transform hover:scale-105 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                            >
                                {adminInfo}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-64 border-none p-2 shadow-sm"
                            align="end"
                            sideOffset={8}
                        >
                            {adminMenu}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="relative h-9 w-9 rounded-md ring-offset-background transition-all hover:ring-2 hover:ring-ring"
                            >
                                <Menu className="size-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-64 border-none p-2 shadow-sm"
                            align="end"
                            sideOffset={8}
                        >
                            {adminMenu}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
