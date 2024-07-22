import { TypographyP } from '@/presentation/components/shared/TypographyP';
import { TypographyH1 } from '@/presentation/components/shared/TypographyH1';
import { RecipeCard } from '@/presentation/components/recipe/RecipeCard';
import dishImage from '/assets/dish1.png';

export const FavoriteRecipes = () => {
  return (
    <div>
      <TypographyH1>Mis Favoritos</TypographyH1>
      <TypographyP>En esta sección verás todas tus recetas favoritas</TypographyP>
      <RecipeCard
        imageUrl={dishImage}
        name='Tallarines Rojos'
        ingredientQuantity={7}
        cookTimeInMins={30}
        calories={230}
        servings={2}
        matchRate={100}
      />
      <RecipeCard
        imageUrl={dishImage}
        name='Tallarines Rojos'
        ingredientQuantity={7}
        cookTimeInMins={30}
        calories={230}
        servings={2}
        matchRate={100}
      />
    </div>
  )
}
