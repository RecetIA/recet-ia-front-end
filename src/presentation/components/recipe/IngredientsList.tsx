import { Ingredient } from "@/infrastructure/interfaces/recipe.response";
import { cn } from "@/presentation/lib/utils";
import { Check } from "lucide-react";

interface Props{
  ingredients: Ingredient[];
  oddStyle?: boolean;
  
}


export const IngredientsList = ({ingredients,oddStyle}: Props) => {
  return (
    <ul className="w-full">
      {ingredients.map((ingredient) => (
        <li
          key={ingredient.id}
          className={cn("flex items-center gap-2 py-2 px-3", {
            "odd:bg-gray-100 even:bg-white": oddStyle,
            "even:bg-gray-100 odd:bg-white": !oddStyle,
          })}
        >
          <span
            className={cn("text-white bg-primary p-0.5 rounded-md w-5 h-5", {
              "bg-primary": !ingredient.isOptional,
              "bg-gray-300": ingredient.isOptional,
            })}
          >
            {!ingredient.isOptional && <Check className="w-4 h-4 font-bold" />}
          </span>

          <p className="flex items-center gap-1 relative bottom-0 md:bottom-0.5">
            <span className="text-gray-700 font-bold">
              {ingredient.quantity} {ingredient.measure.short}
            </span>
            <span className="text-gray-700">
              de {ingredient.name} {ingredient.isOptional && "(Opcional)"}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
};
