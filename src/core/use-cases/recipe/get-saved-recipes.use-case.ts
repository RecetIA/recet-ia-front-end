import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { ShortRecipe } from "@/core/entities/recipe.entity";

import { RecipeMapper } from "@/infrastructure/mappers/recipe.mapper";
import { RecipeResponse } from "@/infrastructure/interfaces/recipe.response";

export const getSavedRecipesUseCase = async (
  fetcher: HttpAdapter,
  token: string
): Promise<ShortRecipe[]> => {
  const recipe = await fetcher.get<RecipeResponse[]>(`/recipe/saved`, {}, token);

  return recipe.map(RecipeMapper.fromFullRecipeToEntity);
};
