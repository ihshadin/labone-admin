import { jwtDecode } from "jwt-decode";

export type JwtPayload = {
  role: string
  email: string
}

export const verifyToken = (token: string) :JwtPayload => {
  return jwtDecode(token);
};
