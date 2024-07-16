import { useState } from 'react';
import { apiFetcher } from '@/config/adapters/api.adapter';
import * as UseCases from '@/core/use-cases';

import { useMutation } from '@tanstack/react-query';

export const useRegisterMutation = () => {
  const [isLoadingRegister, setisLoadingRegister] = useState(false);
  
	const registerMutation = useMutation({
    mutationFn: (body: Record<string, string>) =>
      UseCases.registerUserUseCase(apiFetcher, body),
    onMutate: () => {
      setisLoadingRegister(true);
    },
    onSuccess: () => {
      setisLoadingRegister(false);
    },
    onError: () => {
      setisLoadingRegister(false);
    },
  });

	return {
    registerMutation,
    isLoadingRegister,
  };
};
