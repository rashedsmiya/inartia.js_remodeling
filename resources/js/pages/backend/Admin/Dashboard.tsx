import { Head, usePage } from '@inertiajs/react';
import { AlertCircle, FileText, Phone, Users } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { type SharedData } from '@/types';

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;
    const admin = auth.admin;

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />
            
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {/* Welcome Card */}
                <Card className="col-span-1 xl:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-blue-600" />
                            Welcome back{admin?.name ? `, ${admin.name}` : ''}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        {admin?.email ?? 'You are logged in as admin.'}
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="col-span-1 xl:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-purple-600" />
                            Quick Actions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {/* Placeholder links - routes not yet implemented */}
                        <div className="flex cursor-not-allowed items-center gap-3 rounded-lg border p-3 opacity-50">
                            <FileText className="h-4 w-4" />
                            <div>
                                <div className="font-medium">
                                    Manage Estimates
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Coming soon
                                </div>
                            </div>
                        </div>

                        <div className="flex cursor-not-allowed items-center gap-3 rounded-lg border p-3 opacity-50">
                            <Phone className="h-4 w-4" />
                            <div>
                                <div className="font-medium">
                                    Contact Messages
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Coming soon
                                </div>
                            </div>
                        </div>

                        <div className="flex cursor-not-allowed items-center gap-3 rounded-lg border p-3 opacity-50">
                            <AlertCircle className="h-4 w-4" />
                            <div>
                                <div className="font-medium">Site Settings</div>
                                <div className="text-xs text-muted-foreground">
                                    Coming soon
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
