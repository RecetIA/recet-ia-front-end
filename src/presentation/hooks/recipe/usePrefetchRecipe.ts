import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCases from "@/core/use-cases";

import { useQueryClient } from "@tanstack/react-query";

export const usePrefetchRecipe = (token: string) => {
  const queryClient = useQueryClient();

  const prefetchRecipe = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: ["recipe", { id, token }],
      queryFn: () => UseCases.getRecipeByIdUseCase(apiFetcher, id, token),
    });
  };

  return prefetchRecipe;
};
