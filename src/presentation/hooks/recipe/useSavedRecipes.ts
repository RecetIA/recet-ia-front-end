import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCases from "@/core/use-cases";

import { useQuery } from "@tanstack/react-query";

export const useSavedRecipes = (token: string) => {
  const querySavedRecipes = useQuery({
    queryKey: ["saved-recipes", token],
    queryFn: () => UseCases.getSavedRecipesUseCase(apiFetcher, token),
    placeholderData: [
      {
        id: "asdfrt468076tgfvdx",
        name: "",
        imageUrl: "",
        quantityIngredients: 0,
        cookTimeInMins: 0,
        calories: 0,
        servings: 0,
        matchRate: 0,
        observations: "",
      },
    ],
  });


  return {
    querySavedRecipes,
  };
};
