import { useEffect } from "react";

import * as UsesCases from "@/core/use-cases/user/profile.use-case";
import { apiFetcher } from "@/config/adapters/api.adapter";

import { useQuery } from "@tanstack/react-query";

export const useProfile = (token: string,logout: () => void) => {
  const queryProfile = useQuery({
    queryKey: ["profile", token],
    queryFn: () => UsesCases.profileUseCase(apiFetcher, token),
    enabled: !!token,
    retry: false,
  });

  useEffect(() => {
    if (queryProfile.error?.message === "Invalid token") {
     logout();
    }
  }, [queryProfile.error?.message, logout]);


  return {
    queryProfile,
  };
};
