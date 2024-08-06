import { useLoginMutation, usePrefetchRecipe, useSavedRecipes } from "@/presentation/hooks";

import { TypographyH2 } from "@/presentation/components/shared/TypographyH2";
import { TypographyP } from "@/presentation/components/shared/TypographyP";
import { RecipeCard } from "@/presentation/components/recipe/RecipeCard";
import { EmptyStateMessage } from "@/presentation/components/shared/EmptyStateMessage";

import { Spinner } from "@/presentation/components/ui/spinner";

import { GLOBALS } from "@/config/helpers/constants";

import { NotebookText } from "lucide-react";

export const SavedRecipes = () => {
  const { token } = useLoginMutation();
  const { querySavedRecipes } = useSavedRecipes(token!);
  const prefetchRecipe = usePrefetchRecipe(token!);
  
  return (
    <div className="p-3 h-full">
      <TypographyH2 className="flex items-center gap-2 text-gray-700">
        <NotebookText className="w-8 h-8" /> Mis recetas
      </TypographyH2>
      <TypographyP className="text-gray-700 text-pretty">
        En esta sección verás todas tus recetas generadas.
      </TypographyP>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 md:gap-8 lg:gap-6 xl:gap-4 justify-items-center items-start pt-4 h-5/6">
        {querySavedRecipes.isLoading ? (
          <div className="col-span-4 flex justify-center items-center w-full h-full">
            <Spinner
              size="xxl"
              show={querySavedRecipes.isLoading}
              className="text-slate-300 col-span-4"
            />
          </div>
        ) : querySavedRecipes.data && querySavedRecipes.data.length > 0 ? (
          querySavedRecipes.data?.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              prefetchRecipe={prefetchRecipe}
              isLoading={querySavedRecipes.isLoading}
            />
          ))
        ) : (
          <EmptyStateMessage
            imageUrl={GLOBALS.imageUrlRecipeFeedback}
            message="Aún no tienes recetas. ¡Genera una receta con IA!"
            altText="Imagen de recetas guardadas"
          />
        )}
      </section>
    </div>
  );
};
