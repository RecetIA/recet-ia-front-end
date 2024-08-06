import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCases from "@/core/use-cases";

import { useQuery } from "@tanstack/react-query";

export const useFavoriteRecipes = (token: string) => {
  const queryFavoriteRecipes = useQuery({
    queryKey: ["favorite-recipes", token],
    queryFn: () => UseCases.getFavoriteRecipesUseCase(apiFetcher, token),
  });


  return {
    queryFavoriteRecipes,
  };
};
