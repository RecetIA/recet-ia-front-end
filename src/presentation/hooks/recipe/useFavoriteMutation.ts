import { apiFetcher } from "@/config/adapters/api.adapter";
import { FullRecipe } from "@/core/entities/recipe.entity";
import * as UseCases from "@/core/use-cases";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useFavoriteMutation = (token: string,id: string) => {
  const queryClient = useQueryClient();

  const favoriteMutation = useMutation({
    mutationFn: (body: Record<string, string>) => {
      return UseCases.AddFavoriteRecipeUseCase(apiFetcher, body, token);
    },
    onSuccess: () => {
      queryClient.setQueryData<FullRecipe>(["recipe", { id, token }], (oldData) => {
        if (!oldData) return oldData;
        
        return {
          ...oldData,
          isFavorite: !oldData.isFavorite
        };
      }
      );
    },
  });

  return {
    favoriteMutation,
  };
};
