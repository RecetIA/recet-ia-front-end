
import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";


export const checkUserTokenUseCase = async (
  fetcher: HttpAdapter,
  token: string
): Promise<MessageResponse> => {
  const resetPassword = await fetcher.get<MessageResponse>(
    `/auth/change-password/${token}`,
  );

  return resetPassword;
};
