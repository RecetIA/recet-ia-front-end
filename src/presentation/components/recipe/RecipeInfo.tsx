import { TypographyH2 } from "../shared/TypographyH2";
import { TypographyP } from "../shared/TypographyP";
import { MiniCard } from "./MiniCard";

import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

import { Recipe } from "@/core/entities/recipe.entity";
import { GLOBALS } from "@/config/helpers/constants";

import { ArrowRight, Clock, Flame, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  recipe: Recipe;
  isLoading: boolean;
  showButton?: boolean;
}

export const RecipeInfo = ({ recipe, isLoading, showButton }: Props) => {

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-4">
      {isLoading ? (
        <Skeleton className="w-full md:w-80 h-[31.25rem] md:h-64 rounded-xl" />
      ) : (
        <img
          className="w-full md:w-80 md:h-64 object-cover object-center rounded-xl"
          src={!recipe?.imageUrl ? GLOBALS.imageUrlFallback : recipe?.imageUrl}
          alt="Imagen de receta"
          width="384"
          height="240"
        />
      )}

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
            title={`${recipe?.servings} ${recipe?.servings === 1 ? "porción" : "porciones"}`}
            icon={<User className="w-6 h-6" />}
            isLoading={isLoading}
          />
        </section>

        {showButton && (
          <Link
            to={`/recetas/${recipe?.id}`}
            className={buttonVariants({
              className: "flex gap-3 font-semibold text-lg w-full md:w-auto",
            })}
          >
            Ver receta <ArrowRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </section>
  );
};
