import { TypographyH3 } from "../shared/TypographyH3";
import { TypographyP } from "../shared/TypographyP";
import { IconAvatar } from "../shared/IconAvatar";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { ShortRecipe } from "@/core/entities/recipe.entity";

import { ArrowRight, Clock, Flame, Target, User } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

interface Props {
  recipe: ShortRecipe;
}

const imageUrlFallback = "https://res.cloudinary.com/dufuhfakg/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722098616/placeholder-image_crpjul.png";

export const RecipeCard = ({ recipe }: Props) => {
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
    <Card className="rounded-[.5rem] overflow-hidden">
      <CardHeader className="relative p-0">
        <img
          className="w-full md:h-[200px] object-cover object-center"
          src={!imageUrl ? imageUrlFallback : imageUrl}
          alt={name}
          width={280}
          height={200}
        />
        <Badge
          variant="secondary"
          className="absolute -top-0.5 flex items-center gap-1 bg-slate-200 !m-0"
        >
          <Target className="w-4 h-4" /> {!imageUrl ? "0" : matchRate} %
        </Badge>
      </CardHeader>

      <CardContent className="p-4">
        <TypographyH3 className="text-gray-700 text-pretty text-center line-clamp-2">
          {name}
        </TypographyH3>
        <TypographyP className="text-center text-gray-500">
          {quantityIngredients} ingredientes
        </TypographyP>

        <section className="flex justify-between lg:justify-center items-center gap-3 md:gap-5 mt-3">
          <div className="flex flex-col justify-center items-center">
            <IconAvatar
              className="bg-primary/20 text-primary p-px w-9 h-9"
              icon={<Clock className="w-7 h-7" />}
            />
            <p className="text-gray-500 text-sm text-center text-pretty">
              {cookTimeInMins} min
            </p>
          </div>

          <div className="flex flex-col items-center">
            <IconAvatar
              className="bg-primary/20 text-primary p-px w-9 h-9"
              icon={<Flame className="w-7 h-7" />}
            />
            <p className="text-gray-500 text-sm text-center text-pretty">
              {calories} cal
            </p>
          </div>

          <div className="flex flex-col items-center">
            <IconAvatar
              className="bg-primary/20 text-primary p-px w-9 h-9"
              icon={<User className="w-7 h-7" />}
            />
            <p className="text-gray-500 text-sm text-center text-pretty">
              {servings} {servings === 1 ? "porción" : "porciones"}
            </p>
          </div>
        </section>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Link
          to={`/recetas/${id}`}
          className={buttonVariants({
            className: "flex gap-3 font-semibold text-lg w-full",
          })}
        >
          Ver receta <ArrowRight className="w-5 h-5" />
        </Link>
      </CardFooter>
    </Card>
  );
};