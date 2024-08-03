import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCases from "@/core/use-cases";

import { useQuery } from "@tanstack/react-query";

export const useSavedRecipes = (token: string) => {
  const querySavedRecipes = useQuery({
    queryKey: ["saved-recipes", token],
    queryFn: () => UseCases.getSavedRecipesUseCase(apiFetcher, token),
  });


  return {
    querySavedRecipes,
  };
};
