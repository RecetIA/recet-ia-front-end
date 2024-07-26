import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCases from "@/core/use-cases";

import { useMutation } from "@tanstack/react-query";

export const useGenerateRecipe = (id: string,token: string) => {

  const generateRecipeMutation = useMutation({
    mutationFn: () => UseCases.generateRecipeUseCase(apiFetcher, id, token),
  });

  return {
    generateRecipeMutation,
  };
};
