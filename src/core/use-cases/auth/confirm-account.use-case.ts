import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";


export const confirmAccountUseCase = async(fetcher: HttpAdapter, id: string): Promise<MessageResponse> => {
  const confirmAccount = await fetcher.get<MessageResponse>(`/auth/validate-email/${id}`);

  return confirmAccount;
}