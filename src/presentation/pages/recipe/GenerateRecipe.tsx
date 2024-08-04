import {
  useLoginMutation,
  useRecipeImageMutation,
  useRecipeMutation,
} from "@/presentation/hooks";

import { TypographyH2 } from "@/presentation/components/shared/TypographyH2";
import { TypographyP } from "@/presentation/components/shared/TypographyP";
import { RecipeInfo } from "@/presentation/components/recipe/RecipeInfo";

import { Badge } from "@/presentation/components/ui/badge";
import { Button } from "@/presentation/components/ui/button";
import MultipleSelector from "@/presentation/components/ui/multiple-selector";
import { toast } from "@/presentation/components/ui/use-toast";
import { Spinner } from "@/presentation/components/ui/spinner";

import {
  ingredientsOptions,
  useIngredientsStore,
} from "@/presentation/store/ingredients-store";

import { Sparkles } from "lucide-react";

export const GenerateRecipe = () => {
  const ingredients = useIngredientsStore((state) => state.ingredients);
  const addIngredient = useIngredientsStore((state) => state.addIngredient);
  const maxSelectedIngredients = useIngredientsStore(
    (state) => state.maxSelectedIngredients
  );
  const handleMaxSelected = useIngredientsStore(
    (state) => state.handleMaxSelected
  );

  const { token } = useLoginMutation();
  const { recipeMutation,isLoadingRecipe } = useRecipeMutation(token!);
  const { recipeImgMutation,isLoadingRecipeImg,urlImg } = useRecipeImageMutation(token!);
  
  const handleGenerateRecipe = () => {
    if (ingredients.length === 0) {
      toast({
        title: "Debes seleccionar al menos un ingrediente",
        variant: "destructive",
      });
      return;
    }

    recipeMutation.mutate({
      ingredients: ingredients.map((ingredient) => ingredient.label),
    });

    useIngredientsStore.setState({ ingredients: [] });
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <section className="flex flex-col justify-center items-center text-center">
        <TypographyH2 className="font-semibold mb-3 text-gray-700">
          Tus ingredientes aquí
        </TypographyH2>
        <TypographyP className="text-gray-700 text-balance">
          Echa un vistazo a tu despensa y escribe algunos ingredientes que
          tengas a la mano.
        </TypographyP>
        <TypographyP className="text-gray-700 text-balance">
          Tambien puedes escoger entre algunos de los siguientes debajo del
          campo.
        </TypographyP>

        <MultipleSelector
          className="w-full min-h-12 mt-2 text-lg rounded-xl"
          value={ingredients}
          onChange={(value) =>
            useIngredientsStore.setState({ ingredients: value })
          }
          onMaxSelected={handleMaxSelected}
          defaultOptions={ingredientsOptions}
          placeholder="Ingresa tus ingredientes"
          emptyIndicator={
            <TypographyP className="text-center text-gray-700">
              Ingrediente no encontrado
            </TypographyP>
          }
          hidePlaceholderWhenSelected
          maxSelected={maxSelectedIngredients}
        />

        <div className="flex flex-wrap justify-center gap-3 w-full my-3">
          {ingredientsOptions.map((option, i) => (
            <Button
              key={i}
              onClick={() => addIngredient(option)}
              variant="ghost"
              className="p-0"
            >
              <Badge className="rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm cursor-pointer">
                {option.emoji} {option.label}
              </Badge>
            </Button>
          ))}
        </div>
      </section>

      {(isLoadingRecipe || recipeMutation.data) && (
        <RecipeInfo
          recipe={recipeMutation.data!}
          isLoading={isLoadingRecipe}
          imgOptions={{
            urlImg,
            isLoadingImg: isLoadingRecipeImg,
            handleGenerateImg: () =>
              recipeImgMutation.mutate({
                prompt: recipeMutation.data!.name,
                recipeId: recipeMutation.data!.id,
              }),
          }}
          showButton
        />
      )}

      {!recipeMutation.data && !isLoadingRecipe && (
        <>
          <Button
            onClick={handleGenerateRecipe}
            size="xl"
            className="flex gap-3 font-semibold mb-4 mx-auto"
          >
            Generar receta {!isLoadingRecipe && <Sparkles />}
            <Spinner
              size="small"
              show={isLoadingRecipe}
              className="text-slate-300"
            />
          </Button>

          <hr className="border-gray-300" />
          <section className="my-5">
            <TypographyH2 className="font-semibold mb-3 text-primary text-center">
              Genera una receta <br />
              para ver los resultados
            </TypographyH2>
            <TypographyP className="text-gray-700 text-center text-balance">
              Nuestra Inteligencia Artificial te brindará distintas
              recomendaciones de recetas para ti!
            </TypographyP>
          </section>
        </>
      )}
    </div>
  );
};
