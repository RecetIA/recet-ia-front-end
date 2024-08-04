import { TypographyH3 } from "./TypographyH3";

interface Props {
  imageUrl: string;
  message: string;
  altText: string;
}

export const EmptyStateMessage = ({ imageUrl, message, altText }: Props) => {
  return (
    <div className="col-span-4 inline-flex flex-col justify-center items-center gap-4 relative">
      <img
        className="w-full md:w-96 md:h-80 object-cover object-center bg-white mix-blend-multiply"
        src={imageUrl}
        alt={altText}
        width="384"
        height="320"
      />
      <TypographyH3 className="text-slate-600 text-pretty">
        {message}
      </TypographyH3>
    </div>
  );
};
