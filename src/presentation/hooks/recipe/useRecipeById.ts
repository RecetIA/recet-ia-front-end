import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCases from "@/core/use-cases";

import { useQuery } from "@tanstack/react-query";

export const useRecipe = (id: string, token: string) => {

  const queryRecipe = useQuery({
    queryKey: ["recipe", { id, token }],
    queryFn: () => UseCases.getRecipeByIdUseCase(apiFetcher, id, token),
  });

  const quantityIngredientes = queryRecipe.data?.ingredients.length;
  const quantitySteps = queryRecipe.data?.steps.length;

  return {
    queryRecipe,
    quantityIngredientes,
    quantitySteps,
  };
};
