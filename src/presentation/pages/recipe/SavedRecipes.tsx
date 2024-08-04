import { useLoginMutation, usePrefetchRecipe, useSavedRecipes } from "@/presentation/hooks";

import { TypographyH2 } from "@/presentation/components/shared/TypographyH2";
import { TypographyP } from "@/presentation/components/shared/TypographyP";
import { RecipeCard } from "@/presentation/components/recipe/RecipeCard";
import { EmptyStateMessage } from "@/presentation/components/shared/EmptyStateMessage";

import { GLOBALS } from "@/config/helpers/constants";

import { Bookmark } from "lucide-react";

export const SavedRecipes = () => {
  const { token } = useLoginMutation();
  const { querySavedRecipes } = useSavedRecipes(token!);
  const prefetchRecipe = usePrefetchRecipe(token!);
  
  return (
    <div className="p-3 h-full">
      <TypographyH2 className="flex items-center gap-2 text-gray-700">
        <Bookmark className="w-8 h-8" /> Guardados
      </TypographyH2>
      <TypographyP className="text-gray-700 text-pretty">
        En esta sección verás todas las recetas que guardadas.
      </TypographyP>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-4 justify-items-center pt-4 h-5/6">
        {querySavedRecipes.data && querySavedRecipes.data.length > 0 ? (
          querySavedRecipes.data?.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              prefetchRecipe={prefetchRecipe}
            />
          ))
        ) : (
          <EmptyStateMessage
            imageUrl={GLOBALS.imageUrlRecipeFeedback}
            message="Aún no tienes recetas guardadas. ¡Genera una receta con IA!"
            altText="Imagen de receta cuando no hay guardados"
          />
        )}
      </section>
    </div>
  );
};
