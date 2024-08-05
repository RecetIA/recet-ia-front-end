import { useEffect, useState } from "react";

import * as UseCases from "../../../core/use-cases";
import { apiFetcher } from "@/config/adapters/api.adapter";

import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useLocation, useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const navitation = useNavigate();
   const {pathname} = useLocation();

  const loginMutation = useMutation({
    mutationFn: (body: Record<string, string>) => {
      return UseCases.loginUserUseCase(apiFetcher, body)
    },
    onMutate: () => {
      setIsLoadingLogin(true);
    },
    onSuccess: () => {
      setIsLoadingLogin(false);
    },
    onError: () => {
      setIsLoadingLogin(false);
    },
  });

  const [token, saveToken] = useLocalStorage<string | null>("token", null);
  

  useEffect(() => {
    if (loginMutation.data) {
      saveToken(loginMutation.data as string);
      navitation("/");
    }    

  }, [loginMutation.data, saveToken, navitation]);

  useEffect(() => {
    if (!token && !pathname.includes("/auth")) {
      navitation("/");
    }
  }, [token, navitation, pathname]);
  
  

  const logout = () => {
    saveToken(null);
    navitation("/");
  }

  return { loginMutation, token, logout, isLoadingLogin };
};
