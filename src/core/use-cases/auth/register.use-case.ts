import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";

export const registerUserUseCase = async (fetcher: HttpAdapter, body: Record<string,string>): Promise<MessageResponse> => {
	const register = await fetcher.post<MessageResponse>("/auth/register", body);

	return register;
}