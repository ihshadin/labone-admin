import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../utils/localStorageAuthManagemet";
import { JwtPayload, verifyToken } from "../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  admin?: boolean;
};

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  const token = getUserInfo();

  let user: JwtPayload | undefined;

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (token !== null && typeof token === "string") {
    user = verifyToken(token);
  }

  if (user?.role !== "admin" && user?.role !== "superAdmin") {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
