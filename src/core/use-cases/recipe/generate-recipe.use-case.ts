import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { Recipe } from "@/core/entities/recipe.entity";

import { RecipeMapper } from "@/infrastructure/mappers/recipe.mapper";
import { RecipeResponse } from "@/infrastructure/interfaces/recipe.response";

export const generateRecipeUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  token: string
): Promise<Recipe> => {
  const recipe = await fetcher.get<RecipeResponse>(`/recipe/${id}`, {}, token);
  
  return RecipeMapper.fromRecipeResultToEntity(recipe);
};
