import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCases from "@/core/use-cases";
import { useIngredientsStore } from "@/presentation/store/ingredients-store";

import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useRecipeMutation = (token: string) => {
  const [isLoadingRecipe, setIsLoadingRecipe] = useState(false);

  const generateRecipeMutation = useMutation({
    mutationFn: (body: Record<string, string | string[]>) => {
      return UseCases.generateRecipeUseCase(apiFetcher, body, token);
    },
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

  useEffect(() => {
    useIngredientsStore.setState({ ingredients: [] });
  }, []);

  return {
    recipeMutation: generateRecipeMutation,
    isLoadingRecipe,
  };
};
