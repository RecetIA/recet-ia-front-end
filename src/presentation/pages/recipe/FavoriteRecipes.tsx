import {
  useFavoriteRecipes,
  useLoginMutation,
  usePrefetchRecipe,
} from "@/presentation/hooks";

import { TypographyH2 } from "@/presentation/components/shared/TypographyH2";
import { TypographyP } from "@/presentation/components/shared/TypographyP";
import { RecipeCard } from "@/presentation/components/recipe/RecipeCard";

import { GLOBALS } from "@/config/helpers/constants";

import { Heart } from "lucide-react";
import { EmptyStateMessage } from "@/presentation/components/shared/EmptyStateMessage";

export const FavoriteRecipes = () => {
  const { token } = useLoginMutation();
  const { queryFavoriteRecipes } = useFavoriteRecipes(token!);
  const prefetchRecipe = usePrefetchRecipe(token!);

  return (
    <div className="p-3 h-full">
      <TypographyH2 className="flex items-center gap-2 text-gray-700">
        <Heart className="w-8 h-8" /> Mis favoritos
      </TypographyH2>
      <TypographyP className="text-gray-700 text-pretty">
        En esta sección verás todas tus recetas favoritas.
      </TypographyP>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 md:gap-8 lg:gap-6 xl:gap-4 justify-items-center items-start pt-4 h-5/6">
        {queryFavoriteRecipes.data && queryFavoriteRecipes.data.length > 0 ? (
          queryFavoriteRecipes.data?.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              prefetchRecipe={prefetchRecipe}
              isLoading={queryFavoriteRecipes.isLoading}
            />
          ))
        ) : (
          <EmptyStateMessage
            imageUrl={GLOBALS.imageUrlRecipeFeedback}
            message="Aún no tienes recetas favoritas. ¡Agrega tus recetas favoritas!"
            altText="Imagen de receta cuando no hay favoritos"
          />
        )}
      </section>
    </div>
  );
};
