import { useState } from "react";

import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCases from "@/core/use-cases";

import { useMutation } from "@tanstack/react-query";

export const useRecipeImageMutation = (token: string) => {
  const [isLoadingRecipeImg, setIsLoadingRecipeImg] = useState(false);
  const [urlImg, setUrlImg] = useState("");

  const generateRecipeImgMutation = useMutation({
    mutationFn: (body: Record<string, string>) => {
      return UseCases.generateRecipeImageUseCase(apiFetcher, body, token);
    },
    onMutate: () => {
      setIsLoadingRecipeImg(true);
    },
    onSuccess: (data) => {
      setUrlImg(data.urlImage);
      setIsLoadingRecipeImg(false);
    },
    onError: () => {
      setIsLoadingRecipeImg(false);
    },
  });

  return {
    recipeImgMutation: generateRecipeImgMutation,
    isLoadingRecipeImg,
    urlImg,
  };
};
