
import * as UsesCases from "@/core/use-cases/user/profile.use-case";
import { apiFetcher } from "@/config/adapters/api.adapter";

import { useQuery } from "@tanstack/react-query";

export const useProfile = (token: string) => {
  const queryProfile = useQuery({
    queryKey: ["profile", token],
    queryFn: () => UsesCases.profileUseCase(apiFetcher, token),
    enabled: !!token,
    retry: false,
  });

  return {
    queryProfile,
  };
};
