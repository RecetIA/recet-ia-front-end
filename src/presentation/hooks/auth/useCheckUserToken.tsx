import * as UseCase from "../../../core/use-cases/auth/check-user-token.use-case";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useQuery } from "@tanstack/react-query";

export const useCheckUserToken = (token: string) => {
  const queryCheckToken = useQuery({
    queryKey: ["check-token", token],
    queryFn: () => UseCase.checkUserTokenUseCase(apiFetcher, token),
  });

  return {
    queryCheckToken,
  };
};
