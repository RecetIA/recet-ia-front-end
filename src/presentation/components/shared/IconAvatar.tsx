import { cn } from "@/presentation/lib/utils";

interface Props {
  icon: React.ReactNode;
  className?: string;
  handleClick?: () => void;
}

export const IconAvatar = ({
  icon,
  className,
  handleClick,
}: Props) => {
  return (
    <span
      className={cn(
        "flex justify-center items-center w-8 h-8 rounded-full",
        className,
      )}
      onClick={() => handleClick && handleClick()}
    >
      {icon}
    </span>
  );
};
