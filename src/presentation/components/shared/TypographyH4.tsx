import { cn } from '@/presentation/lib/utils';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export function TypographyH4({className, children}: Props) {
    return (
      <h4 className={cn(`scroll-m-20 text-xl font-semibold tracking-tight`, className)}>
        {children}
      </h4>
    )
  }
  