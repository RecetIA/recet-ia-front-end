import { TypographyH2 } from "../shared/TypographyH2";
import { TypographyP } from "../shared/TypographyP";
import { MiniCard } from "./MiniCard";

import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

import { Recipe } from "@/core/entities/recipe.entity";

import { ArrowRight, Clock, Flame, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  recipe: Recipe;
  showButton?: boolean;
}

export const RecipeInfo = ({ recipe,showButton }: Props) => {
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
        className="w-full md:w-80 h-96 md:h-64 object-cover object-center rounded-xl"
        src={imageUrl}
        alt="Imagen de receta"
        width="384"
        height="240"
      />

      <div className="flex flex-col justify-start items-start gap-2">
        <Badge className="bg-primary/20 hover:bg-primary/20 text-primary text-base">
          Receta
        </Badge>

        <TypographyH2 className="font-bold uppercase text-gray-700 text-balance w-full">
          {name}
        </TypographyH2>
        <TypographyP className="text-gray-700 text-pretty sm:text-balance">
          {description}
        </TypographyP>

        <section className="flex flex-col sm:flex-row gap-3 w-full">
          <MiniCard
            title={`${cookTimeInMins} min`}
            icon={<Clock className="w-6 h-6" />}
          />
          <MiniCard
            title={`${calories} cal`}
            icon={<Flame className="w-6 h-6" />}
          />
          <MiniCard
            title={`${servings} ${servings === 1 ? "porción" : "porciones"}`}
            icon={<User className="w-6 h-6" />}
          />
        </section>

        {showButton && (
          <Link
            to={`/recetas/${recipe.id}`}
            className={buttonVariants({
              className:
                "flex gap-3 font-semibold text-lg w-full md:w-auto",
            })}
          >
            Ver receta <ArrowRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </section>
  );
};
