import { TypographyH3 } from "../shared/TypographyH3";
import { TypographyP } from "../shared/TypographyP";
import { MiniCard } from "./MiniCard";

import { Badge } from "../ui/badge";

import { Recipe } from "@/core/entities/recipe.entity";

import { ArrowRight, Clock, Flame, User } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

interface Props {
  recipe: Recipe;
}

export const RecipeInfo = ({ recipe }: Props) => {
  const {
    name,
    description,
    imageUrl,
    cookTimeInMins,
    calories,
    servings
  } = recipe

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-4">
      <img
        className="w-full md:w-96 h-96 md:h-64 object-cover object-center rounded-xl"
        src={imageUrl}
        alt="Imagen de receta"
        width="384"
        height="240"
      />

      <div className="flex flex-col justify-start items-start gap-2">
        <Badge className="bg-primary/20 hover:bg-primary/20 text-primary text-base">
          Receta
        </Badge>
        <TypographyH3 className="font-bold uppercase text-gray-700 text-balance w-full">
          {name}
        </TypographyH3>
        <TypographyP className="text-gray-700 text-balance">
          {description}
        </TypographyP>

        <section className="flex flex-col sm:flex-row gap-3 w-full">
          <MiniCard
            title={`${cookTimeInMins} min`}
            icon={<Clock width="1rem" height="1rem" />}
          />
          <MiniCard
            title={`${calories} cal`}
            icon={<Flame width="1rem" height="1rem" />}
          />
          <MiniCard
            title={`${servings} ${servings === 1 ? "porción" : "porciones"}`}
            icon={<User width="1rem" height="1rem" />}
          />
        </section>

        <Link
          to={`/receta/${recipe.id}`}
          className={buttonVariants({
            className:
              "flex gap-3 font-semibold text-base mt-2 w-full md:w-auto",
          })}
        >
          Ver receta <ArrowRight />
        </Link>
      </div>
    </section>
  );
};
