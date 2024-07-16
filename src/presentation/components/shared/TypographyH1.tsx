import { cn } from '@/presentation/lib/utils';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export function TypographyH1({ children, className }: Props) {
    return (
        <h1 className={cn('scroll-m-20 text-3xl md:text-4xl tracking-tight lg:text-5xl', className)}>
            {children}
        </h1>
    )
}
