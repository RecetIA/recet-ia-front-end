import { User } from "@/core/entities/user.entity";
import { ProfileResponse } from "../interfaces/user.response";

export class UserMapper {
  static fromAuthResponseToUserProfile(response: ProfileResponse): User {
    return {
      id: response.id,
      name: response.name,
      email: response.email,
      img: response.img,
    };
  }
}
