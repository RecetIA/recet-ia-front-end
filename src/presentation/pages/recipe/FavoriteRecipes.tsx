import { useFavoriteRecipes, useLoginMutation, usePrefetchRecipe } from '@/presentation/hooks';

import { TypographyH2 } from '@/presentation/components/shared/TypographyH2';
import { TypographyP } from '@/presentation/components/shared/TypographyP';

import { RecipeCard } from '@/presentation/components/recipe/RecipeCard';

import { Heart } from 'lucide-react';

export const FavoriteRecipes = () => {
  const { token } = useLoginMutation();
  const { queryFavoriteRecipes } = useFavoriteRecipes(token!);
  const prefetchRecipe = usePrefetchRecipe(token!);

  return (
    <div className="p-3">
      <TypographyH2 className="flex items-center gap-2 text-gray-700">
        <Heart className="w-7 h-7" /> Mis favoritos
      </TypographyH2>
      <TypographyP className="text-gray-700 text-pretty">
        En esta sección verás todas tus recetas favoritas
      </TypographyP>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-4 justify-items-center pt-4">
        {queryFavoriteRecipes.data?.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            prefetchRecipe={prefetchRecipe}
          />
        ))}
      </section>
    </div>
  );
}
