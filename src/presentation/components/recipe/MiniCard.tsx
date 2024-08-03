import { IconAvatar } from "../shared/IconAvatar";
import { Skeleton } from "../ui/skeleton";

interface Props {
  title: string;
  icon: React.ReactNode;
  isLoading?: boolean;
}

export const MiniCard = ({ title, icon,isLoading }: Props) => {
  return (
    <div className="flex sm:justify-center items-center gap-6 sm:gap-2 shadow-sm py-2 px-5 border border-gray-200">
      {isLoading ? (
        <>
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </>
      ) : (
        <>
          <IconAvatar className="bg-primary/20 text-primary" icon={icon} />
          <p className="text-gray-600">{title}</p>
        </>
      )}
    </div>
  );
};
