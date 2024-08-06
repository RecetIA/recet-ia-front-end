import { TypographyH3 } from "../shared/TypographyH3";
import { TypographyP } from "../shared/TypographyP";
import { IconAvatar } from "../shared/IconAvatar";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { buttonVariants } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

import { ShortRecipe } from "@/core/entities/recipe.entity";
import { GLOBALS } from "@/config/helpers/constants";

import { ArrowRight, Clock, Flame, Target, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  recipe: ShortRecipe;
  isLoading: boolean;
  prefetchRecipe?: (id: string) => void;
}

export const RecipeCard = ({ recipe, prefetchRecipe, isLoading }: Props) => {
  const {
    id,
    name,
    quantityIngredients,
    cookTimeInMins,
    calories,
    servings,
    matchRate,
    imageUrl,
  } = recipe;

  return (
    <Card className="flex flex-col justify-between rounded-[.5rem] w-full">
      <CardHeader className="relative p-0">
        {isLoading ? (
          <Skeleton className="w-full h-[31.25rem] md:h-64 rounded-lg rounded-bl-none rounded-br-none" />
        ) : (
          <img
            className="w-full md:h-[200px] object-cover object-center"
            src={!imageUrl ? GLOBALS.imageUrlFallback : imageUrl}
            alt={name}
            width={280}
            height={200}
          />
        )}

        <Badge
          variant="secondary"
          className="absolute -top-0.5 items-center gap-1 bg-slate-200 !m-0 hidden"
        >
          <Target className="w-4 h-4" /> {matchRate} %
        </Badge>
      </CardHeader>

      <CardContent className="p-4">
        {isLoading ? (
          <div className="flex flex-col items-center gap-2">
            <Skeleton className="h-4 md:h-8 w-full" />
            <Skeleton className="h-3 md:h-3 w-5/6" />
          </div>
        ) : (
          <>
            <TypographyH3 className="text-gray-700 text-pretty text-center line-clamp-2">
              {name}
            </TypographyH3>
            <TypographyP className="text-center text-gray-500">
              {quantityIngredients} ingredientes
            </TypographyP>
          </>
        )}

        <section className="flex justify-between lg:justify-center items-center gap-3 md:gap-5 mt-3">
          <div className="flex flex-col justify-center items-center gap-1">
            <IconAvatar
              className="bg-primary/20 text-primary p-px w-9 h-9"
              icon={<Clock className="w-7 h-7" />}
            />
            {isLoading ? (
              <Skeleton className="h-3 w-14" />
            ) : (
              <p className="text-gray-500 text-sm text-center text-pretty">
                {cookTimeInMins} min
              </p>
            )}
          </div>

          <div className="flex flex-col items-center gap-1">
            <IconAvatar
              className="bg-primary/20 text-primary p-px w-9 h-9"
              icon={<Flame className="w-7 h-7" />}
            />
            {isLoading ? (
              <Skeleton className="h-3 w-14" />
            ) : (
              <p className="text-gray-500 text-sm text-center text-pretty">
                {calories} cal
              </p>
            )}
          </div>

          <div className="flex flex-col items-center gap-1">
            <IconAvatar
              className="bg-primary/20 text-primary p-px w-9 h-9"
              icon={<User className="w-7 h-7" />}
            />
            {isLoading ? (
              <Skeleton className="h-3 w-14" />
            ) : (
              <p className="text-gray-500 text-sm text-center text-pretty">
                {servings} {servings === 1 ? "porción" : "porciones"}
              </p>
            )}
          </div>
        </section>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Link
          to={`/recetas/${id}`}
          onMouseEnter={() => prefetchRecipe && prefetchRecipe(id)}
          className={buttonVariants({
            className: `flex gap-3 font-semibold text-lg w-full ${!name ? "pointer-events-none cursor-not-allowed opacity-65" : ""}`,
          })}
        >
          Ver receta <ArrowRight className="w-5 h-5" />
        </Link>
      </CardFooter>
    </Card>
  );
};
