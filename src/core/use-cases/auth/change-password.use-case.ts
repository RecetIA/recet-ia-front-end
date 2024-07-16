import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";

export const changePasswordUseCase = async (
  fetcher: HttpAdapter,
  body: Record<string, string>,
  token: string,
): Promise<MessageResponse> => {
  const resetPassword = await fetcher.post<MessageResponse>(
    `/auth/change-password/${token}`,
    body
  );

  return resetPassword;
};
