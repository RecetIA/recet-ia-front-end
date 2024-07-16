import { useState } from "react";
import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCase from "../../../core/use-cases/auth/reset-password.use-case";

import { useMutation } from "@tanstack/react-query";

export const useResetPasswordMutation = () => {
  const [isLoadingResetPassword, setisLoadingResetPassword] = useState(false);
  
  const resetPasswordMutation = useMutation({
    mutationFn: (body: Record<string, string>) => {
      return UseCase.resetPasswordUseCase(apiFetcher, body);
    },
    onMutate: () => {
      setisLoadingResetPassword(true);
    },
    onSuccess: () => {
      setisLoadingResetPassword(false);
    },
    onError: () => {
      setisLoadingResetPassword(false);
    },
  });

  return {
    resetPasswordMutation,
    isLoadingResetPassword,
  };
};
