import { HttpAdapter } from "@/config/adapters/http/http.adapter";

import { ImageResponse } from "@/infrastructure/interfaces/api.responses";

export const generateRecipeImageUseCase = async (
  fetcher: HttpAdapter,
  body: Record<string, string>,
  token: string
): Promise<ImageResponse> => {
  const recipe = await fetcher.post<ImageResponse>("/recipe/generate-recipe-image",body,{},token);

  return recipe;
};
