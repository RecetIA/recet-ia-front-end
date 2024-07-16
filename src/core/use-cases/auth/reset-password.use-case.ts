import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";

export const resetPasswordUseCase = async (
  fetcher: HttpAdapter,
  body: Record<string, string>
): Promise<MessageResponse> => {
  const resetPassword = await fetcher.post<MessageResponse>("/auth/reset-password",body);

  return resetPassword;
};
