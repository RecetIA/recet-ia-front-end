export interface AuthResponse {
  token: string;
  user: UserResponse;
}

export interface UserResponse {
  email: string;
  emailValidated: boolean;
  id: string;
  name: string;
  role: string[];
  img: string | null;
}

export interface ProfileResponse extends UserResponse {
  createdAt: string;
  updatedAt: string;
}

