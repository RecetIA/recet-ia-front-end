import { cn } from '@/presentation/lib/utils';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const TypographyH2 = ({ children, className }: Props) => {
	return (
		<h2
			className={cn(
				'tracking-tight text-[#1E1E1E] font-bold text-3xl lg:text-4xl',
				className
			)}>
			{children}
		</h2>
	);
};