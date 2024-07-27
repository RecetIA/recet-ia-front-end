import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { FullRecipe } from "@/core/entities/recipe.entity";

import { RecipeMapper } from "@/infrastructure/mappers/recipe.mapper";
import { RecipeResponse } from "@/infrastructure/interfaces/recipe.response";

export const getRecipeByIdUseCase = async (
  fetcher: HttpAdapter,
  id: string,
  token: string
): Promise<FullRecipe> => {
  const recipe = await fetcher.get<RecipeResponse>(`/recipe/${id}`, {}, token);

  return RecipeMapper.fromRecipeToEntity(recipe);
};
