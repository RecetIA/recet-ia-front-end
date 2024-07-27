import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";


export const AddFavoriteRecipeUseCase = async (
  fetcher: HttpAdapter,
  body: Record<string,string>,
  token: string
): Promise<MessageResponse> => {
  const recipe = await fetcher.post<MessageResponse>(`/recipe/favorites`,body,{},token);

  return recipe;
};
