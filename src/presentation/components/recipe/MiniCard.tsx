interface Props {
  title: string;
  icon: React.ReactNode;
}

export const MiniCard = ({ title, icon }: Props) => {
  return (
    <div className="flex sm:justify-center sitems-center gap-6 sm:gap-2 shadow-lg py-2 px-5 border border-gray-200">
      <span className="flex justify-center items-center w-6 h-6 bg-primary/20 text-primary rounded-full">{icon}</span>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};
