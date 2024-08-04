import { cn } from "@/presentation/lib/utils";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Tooltip = ({ children, className }: Props) => {
  return (
    <span
      className={cn(
        `bg-primary text-primary-foreground text-center -z-10 -top-[3.3rem]
        translate-y-16 opacity-0 invisible group-hover:translate-y-0 text-nowrap
        group-active:visible group-hover:opacity-100 transition-all duration-700
        block absolute py-1 px-2 text-sm rounded-lg before:content-[""] 
        before:absolute before:w-0 before:h-0 before:border-x-8 before:border-x-transparent	 
        before:border-t-[12px] before:border-t-current before:-bottom-2 before:left-1/2 
        before:-translate-x-1/2
			`,
        className
      )}
    >
      {children}
    </span>
  );
};
