import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCases from "@/core/use-cases";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const useRecipeMutation = (id: string, token: string) => {
  const [isLoadingRecipe, setIsLoadingRecipe] = useState(false);

  const generateRecipeMutation = useMutation({
    mutationFn: () => UseCases.generateRecipeUseCase(apiFetcher, id, token),
    onMutate: () => {
      setIsLoadingRecipe(true);
    },
    onSuccess: () => {
      setIsLoadingRecipe(false);
    },
    onError: () => {
      setIsLoadingRecipe(false);
    },
  });

  return {
    recipeMutation: generateRecipeMutation,
    isLoadingRecipe,
  };
};
