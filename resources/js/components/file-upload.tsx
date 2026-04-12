import { X } from 'lucide-react';
import * as React from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FileUploadProps {
    onChange?: (file: File | null) => void;
    existingFiles?: Array<{
        id?: number | string;
        url: string;
        name?: string;
        mime_type?: string;
        path?: string;
    }>;
    onRemoveExisting?: () => void;
    multiple?: boolean;
    accept?: string;
}

export default function FileUpload({
    onChange,
    existingFiles = [],
    onRemoveExisting,
    accept = 'image/*',
}: FileUploadProps) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        onChange?.(file);
    };

    return (
        <div className="space-y-4">
            <Label className="block">
                <span className="sr-only">Choose file</span>
                <Input
                    type="file"
                    accept={accept}
                    onChange={handleFileChange}
                    className="cursor-pointer"
                />
            </Label>

            {existingFiles.length > 0 && (
                <div className="space-y-2">
                    {existingFiles.map((file, index) => (
                        <div
                            key={file.id || index}
                            className="flex items-center justify-between rounded-md border p-3"
                        >
                            <div className="flex items-center gap-3">
                                {file.url && (
                                    <img
                                        src={file.url}
                                        alt={file.name}
                                        className="h-12 w-12 rounded object-cover"
                                    />
                                )}
                                <span className="text-sm">{file.name}</span>
                            </div>
                            {onRemoveExisting && (
                                <button
                                    type="button"
                                    onClick={onRemoveExisting}
                                    className="text-muted-foreground hover:text-destructive"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
