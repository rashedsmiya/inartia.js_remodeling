import { cn } from '@/lib/utils';

interface AppLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export default function AppLogo({ className, ...props }: AppLogoProps) {
    return (
        <>
            <img src='https://images.unsplash.com/photo-1633544325196-bcf8bf81ead0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5zcGxhc2glMjBsb2dvfGVufDB8fDB8fHww' alt="App Logo" className={cn("w-auto max-w-[420px] object-contain", className)} {...props} />
        </>
    );
}
