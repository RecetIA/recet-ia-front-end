import { AuthResponse } from "../interfaces/user.response";

export class AuthMapper{
  static fromAuthResponseToToken(response: AuthResponse): string{
    return response.token;
  }
}