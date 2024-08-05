import {
  useFavoriteMutation,
  useLoginMutation,
  useRecipe,
  useRecipeImageMutation,
} from "@/presentation/hooks";

import { TypographyH3 } from "@/presentation/components/shared/TypographyH3";
import { TypographyP } from "@/presentation/components/shared/TypographyP";

import { RecipeInfo } from "@/presentation/components/recipe/RecipeInfo";
import { IngredientsList } from "@/presentation/components/recipe/IngredientsList";

import { Button } from "@/presentation/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/presentation/components/ui/tooltip";

import { Formatter } from "@/config/helpers/formatter";
import { cn } from "@/presentation/lib/utils";

import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";

export const FullRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { token } = useLoginMutation();
  const { queryRecipe, quantityIngredientes, quantitySteps } = useRecipe(
    params.id!,
    token!
  );
  const { favoriteMutation } = useFavoriteMutation(token!, params.id!);
  const { recipeImgMutation,isLoadingRecipeImg,urlImg } = useRecipeImageMutation(token!);

  const [firstHalfIngredients, secondHalfIngredients] = Formatter.splitArray(
    queryRecipe.data?.ingredients || []
  );

  return (
    <div className="bg-slate-100 my-4 rounded-xl shadow-sm border border-gray-200 mx-2 md:mx-0">
      <section className="flex justify-between items-center py-4 px-6">
        <Button
          onClick={() => navigate(-1)}
          size="icon"
          className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-gray-700 shadow-none transition-all"
        >
          <ArrowLeft />
        </Button>

        <div className="flex gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() =>
                  favoriteMutation.mutate({ recipeId: params.id! })
                }
                size="icon"
                className="w-8 h-8 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary shadow-none transition-all"
              >
                <Heart
                  className={cn({
                    "fill-primary": queryRecipe.data?.isFavorite,
                  })}
                />
              </Button>
            </TooltipTrigger>

            <TooltipContent side="left" className="text-slate-200">
              <p className="font-semibold">
                {queryRecipe.data?.isFavorite
                  ? "Quitar de favoritos"
                  : "Añadir a favoritos"}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section className="p-6 bg-white">
        {queryRecipe.data && (
          <RecipeInfo
            recipe={queryRecipe.data}
            isLoading={queryRecipe.isLoading}
            imgOptions={{
              isLoadingImg: isLoadingRecipeImg,
              urlImg,
              handleGenerateImg: () =>
                recipeImgMutation.mutate({
                  prompt: queryRecipe.data!.description,
                  recipeId: queryRecipe.data!.id,
                }),
            }}
          />
        )}
      </section>

      <section className="py-6 px-10">
        <TypographyH3 className="flex items-baseline gap-1 text-gray-700 text-balance w-full mb-4">
          Ingredientes{" "}
          <span className="relative bottom-0 md:bottom-0.5 font-normal text-base">
            {" "}
            ({quantityIngredientes} elementos)
          </span>
        </TypographyH3>

        <div className="flex flex-col lg:flex-row gap-x-4">
          <IngredientsList ingredients={firstHalfIngredients} />

          <div className="border-l border border-gray-300 mx-4 w-px hidden md:block"></div>

          <IngredientsList ingredients={secondHalfIngredients} oddStyle />
        </div>
      </section>

      <section className="py-6 px-10 bg-white">
        <TypographyH3 className="flex items-baseline gap-1 text-gray-700 text-balance w-full mb-4">
          Preparación{" "}
          <span className="relative bottom-0 md:bottom-0.5 font-normal text-base">
            {" "}
            ({quantitySteps} pasos)
          </span>
        </TypographyH3>

        <ol className="list-decimal list-inside">
          {queryRecipe.data?.steps.map((step, index) => (
            <li
              key={index + 1}
              className="text-gray-700 mb-3 marker:font-bold text-pretty"
            >
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="py-6 px-10">
        <TypographyH3 className="text-gray-700 w-full mb-4">
          Aporte Nutricional
        </TypographyH3>
        <TypographyP className="text-gray-700 text-pretty sm:text-balance">
          {queryRecipe.data?.nutritional.summary}
        </TypographyP>

        <div className="flex flex-col gap-4 mt-4">
          {queryRecipe.data?.nutritional.values.map((value, index) => (
            <TypographyP
              key={index}
              className="flex flex-row justify-between border-b-2 py-1"
            >
              <span className="text-gray-700">
                {value.name} ({value.measure.short}):
              </span>

              <span className="text-gray-700 font-semibold">
                {value.quantity}
              </span>
            </TypographyP>
          ))}
        </div>
      </section>
    </div>
  );
};
