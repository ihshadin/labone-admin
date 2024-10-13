import { jwtDecode } from "jwt-decode"; // Corrected the import statement

export type JwtPayload = {
  role: string;
  email: string;
  exp?: number; // Optional because not all tokens might have it
} | null;

export const verifyToken = (token: string): JwtPayload => {
  const decoded = jwtDecode<JwtPayload>(token);

  // Check if the token has an expiration field
  if (decoded?.exp) {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    if (decoded?.exp < currentTime) {
      return null;
      // throw new Error("Token has expired.");
    }
  }

  return decoded;
};
