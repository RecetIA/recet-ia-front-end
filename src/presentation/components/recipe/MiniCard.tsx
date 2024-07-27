import { IconAvatar } from "../shared/IconAvatar";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export const MiniCard = ({ title, icon }: Props) => {
  return (
    <div className="flex sm:justify-center items-center gap-6 sm:gap-2 shadow-lg py-2 px-5 border border-gray-200">
      <IconAvatar className="bg-primary/20 text-primary" icon={icon} />
      <p className="text-gray-600">{title}</p>
    </div>
  );
};
