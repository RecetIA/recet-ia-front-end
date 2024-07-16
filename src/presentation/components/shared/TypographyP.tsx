import { cn } from '@/presentation/lib/utils';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const TypographyP = ({ children, className }: Props) => {
	return (
		<p className={cn('leading-7 text-[#202446] text-base sm:text-lg', className)}>{children}</p>
	);
};