import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCase from "../../../core/use-cases/auth/change-password.use-case";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const useChangePasswordMutation = (token: string) => {
  const [isLoadingChangePassword, setisLoadingChangePassword] = useState(false);
  
  const changePasswordMutation = useMutation({
    mutationFn: (body: Record<string, string>) => {
      return UseCase.changePasswordUseCase(apiFetcher, body, token);
    },
    onMutate: () => {
      setisLoadingChangePassword(true);
    },
    onSuccess: () => {
      setisLoadingChangePassword(false);
    },
    onError: () => {
      setisLoadingChangePassword(false);
    },
  });

  return {
    changePasswordMutation,
    isLoadingChangePassword,
  };
};
