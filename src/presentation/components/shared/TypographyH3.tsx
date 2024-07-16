import { cn } from "@/presentation/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH3({ children, className }: Props) {
  return (
    <h3
      className={cn(
        `scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight`,
        className
      )}
    >
      {children}
    </h3>
  );
}
