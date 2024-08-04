import { TypographyH2 } from "../shared/TypographyH2";
import { TypographyP } from "../shared/TypographyP";
import { MiniCard } from "./MiniCard";

import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/presentation/components/ui/tooltip";

import { Recipe } from "@/core/entities/recipe.entity";
import { GLOBALS } from "@/config/helpers/constants";

import { ArrowRight, Clock, Flame, ImageUp, User } from "lucide-react";
import { Link } from "react-router-dom";
import { IconAvatar } from "../shared/IconAvatar";
import { Spinner } from "../ui/spinner";
import { cn } from "@/presentation/lib/utils";

type ImgOptions = {
  isLoadingImg: boolean;
  urlImg: string;
  handleGenerateImg: () => void;
};

interface Props {
  recipe: Recipe;
  isLoading: boolean;
  imgOptions: ImgOptions;
  showButton?: boolean;
}

export const RecipeInfo = ({
  recipe,
  isLoading,
  imgOptions,
  showButton,
}: Props) => {
  const { isLoadingImg, urlImg, handleGenerateImg } = imgOptions;
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-4">
      <Tooltip>
        <TooltipTrigger>
          {isLoadingImg ? (
            <Skeleton className="w-full md:w-80 h-[31.25rem] md:h-64 rounded-xl" />
          ) : (
            <figure className="relative">
              <img
                className="w-full lg:w-80 lg:h-64 object-cover object-center rounded-xl border border-gray-200"
                src={
                  recipe?.imageUrl
                    ? recipe?.imageUrl
                    : urlImg ? urlImg : GLOBALS.imageUrlFallback
                }
                alt="Imagen de receta"
                width="384"
                height="240"
              />
              {recipe?.imageUrl || urlImg ? null: (
                <IconAvatar
                  className="absolute bottom-3 right-3 lg:left-[5.8rem] lg:top-[5.6rem] bg-white text-slate-600 hover:text-slate-800 lg:w-11 lg:h-11 cursor-pointer transition-colors"
                  icon={<ImageUp className="w-6 h-6" />}
                  handleClick={handleGenerateImg}
                />
              )}
            </figure>
          )}
        </TooltipTrigger>

        <TooltipContent
          side="top"
          className="text-white bg-gray-700 font-semibold"
        >
          <p>
            {isLoadingImg
              ? "Generando imagen..."
              : "Genera una nueva imagen para esta receta"}
          </p>
        </TooltipContent>
      </Tooltip>

      <div className="flex-1 flex flex-col justify-start items-start gap-2 w-full">
        <Badge className="bg-primary/20 hover:bg-primary/20 text-primary text-base">
          Receta
        </Badge>

        {isLoading ? (
          <>
            <Skeleton className="h-14 md:h-9 w-5/6" />
            <Skeleton className="h-3 md:h-6 w-4/6" />
            <Skeleton className="h-3 md:h-6 w-4/6" />
          </>
        ) : (
          <>
            <TypographyH2 className="font-bold uppercase text-gray-700 text-balance w-full">
              {recipe?.name}
            </TypographyH2>
            <TypographyP className="text-gray-700 text-pretty sm:text-balance">
              {recipe?.description}
            </TypographyP>
          </>
        )}

        <section className="flex flex-col sm:flex-row gap-3 w-full">
          <MiniCard
            title={`${recipe?.cookTimeInMins} min`}
            icon={<Clock className="w-6 h-6" />}
            isLoading={isLoading}
          />
          <MiniCard
            title={`${recipe?.calories} cal`}
            icon={<Flame className="w-6 h-6" />}
            isLoading={isLoading}
          />
          <MiniCard
            title={`${recipe?.servings} ${
              recipe?.servings === 1 ? "porción" : "porciones"
            }`}
            icon={<User className="w-6 h-6" />}
            isLoading={isLoading}
          />
        </section>

        {showButton && (
          <Button
            className={cn({
              "pointer-events-none cursor-not-allowed": isLoadingImg,
            })}
            asChild
          >
            <Link
              to={`/recetas/${recipe?.id}`}
              className={buttonVariants({
                className: "flex gap-3 font-semibold text-lg w-full md:w-auto",
              })}
            >
              {isLoadingImg ? "Generando imagen..." : "Ver receta"}
              {isLoadingImg ? (
                <Spinner
                  size="small"
                  show={isLoadingImg}
                  className="text-slate-300"
                />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
};
