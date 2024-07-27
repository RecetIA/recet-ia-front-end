import { useFavoriteRecipes, useLoginMutation } from '@/presentation/hooks';

import { TypographyH2 } from '@/presentation/components/shared/TypographyH2';
import { TypographyP } from '@/presentation/components/shared/TypographyP';

import { RecipeCard } from '@/presentation/components/recipe/RecipeCard';
import dishImage from '/assets/dish1.png';
import { Heart } from 'lucide-react';

export const FavoriteRecipes = () => {
  const { token } = useLoginMutation();
  const { queryFavoriteRecipes } = useFavoriteRecipes(token!);
  return (
    <div className="py-6">
      <TypographyH2 className="flex items-center gap-2 text-gray-700">
        <Heart className="w-8 h-8"/> Mis Favoritos
      </TypographyH2>
      <TypographyP className="text-gray-700 text-balance">
        En esta sección verás todas tus recetas favoritas
      </TypographyP>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center pt-4">
        <RecipeCard
          imageUrl={dishImage}
          name="Tallarines Rojos"
          ingredientQuantity={7}
          cookTimeInMins={30}
          calories={230}
          servings={2}
          matchRate={100}
        />
        
      </section>
    </div>
  );
}
