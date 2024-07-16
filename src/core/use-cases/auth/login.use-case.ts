import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { AuthResponse } from "@/infrastructure/interfaces/user.response";
import { AuthMapper } from "@/infrastructure/mappers/auth.mapper";


export const loginUserUseCase = async (fetcher: HttpAdapter,body: Record<string,string>): Promise<string> => {
  const login = await fetcher.post<AuthResponse>("/auth/login", body);

  return AuthMapper.fromAuthResponseToToken(login);
}