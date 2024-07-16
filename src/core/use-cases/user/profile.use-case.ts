import { HttpAdapter } from "@/config/adapters/http/http.adapter";

import { User } from "@/core/entities/user.entity";

import { ProfileResponse } from "@/infrastructure/interfaces/user.response";
import { UserMapper } from "@/infrastructure/mappers/user.mapper";

export const profileUseCase = async (
  fetcher: HttpAdapter,
  token: string
): Promise<User> => {
 

  const profile = await fetcher.get<ProfileResponse>("/user/profile",{}, token);

  return UserMapper.fromAuthResponseToUserProfile(profile);
};
