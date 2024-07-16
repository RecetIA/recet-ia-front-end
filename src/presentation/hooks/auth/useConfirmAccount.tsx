import * as UsesCases from "../../../core/use-cases/auth/confirm-account.use-case";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useQuery } from "@tanstack/react-query";

export const useConfirmAccount = (id: string) => {
  const queryConfirmAccount = useQuery({
    queryKey: ["confirm-account", id],
    queryFn: () => UsesCases.confirmAccountUseCase(apiFetcher, id),
    staleTime: 60 * 1000,
  });

  return {
    queryConfirmAccount,
  };
};
