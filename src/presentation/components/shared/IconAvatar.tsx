import { cn } from "@/presentation/lib/utils";

interface Props {
  icon: React.ReactNode;
  className?: string;
}

export const IconAvatar = ({
  icon,
  className,
}: Props) => {
  return (
    <span
      className={cn(
        "flex justify-center items-center w-8 h-8 rounded-full",
        className,
      )}
    >
      {icon}
    </span>
  );
};
