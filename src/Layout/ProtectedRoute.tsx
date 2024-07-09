import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../utils/localStorageAuthManagemet";
// import { verifyToken } from "../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  isAdmin: boolean | undefined;
};

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  // const token = getUserInfo();

  // let user;

  // if (token !== null && typeof token === "string") {
  //   user = verifyToken(token);
  // }

  // if (isAdmin !== undefined && isAdmin !== user?.isAdmin) {
  // dispatch(Logout());
  //   return <Navigate to="/login" replace={true} />;
  // }

  // if (!token) {
  //   return <Navigate to="/login" replace={true} />;
  // }

  return children;
};

export default ProtectedRoute;
