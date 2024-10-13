import { ReactNode, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getUserInfo } from "../utils/localStorageAuthManagemet";
import { JwtPayload, verifyToken } from "../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  admin?: boolean;
};

const ProtectedRoute = ({ children, admin = false }: TProtectedRoute) => {
  const [isExpired, setIsExpired] = useState(false); // Tracks token expiration
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error message state
  const [user, setUser] = useState<JwtPayload | null>(null); // Store decoded token user
  const navigate = useNavigate();
  const token = getUserInfo();

  useEffect(() => {
    // Token existence check
    if (!token) {
      setErrorMessage("No token found. Please log in.");
      setIsExpired(true);
      return;
    }

    // Verify token
    const decodedUser = verifyToken(token);

    if (!decodedUser) {
      setErrorMessage("Session has expired. Redirecting to login...");
      setIsExpired(true);
      return;
    }

    setUser(decodedUser); // Store user from token

    // Set up a real-time expiration check
    const interval = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

      if (decodedUser?.exp && decodedUser.exp < currentTime) {
        setErrorMessage("Session has expired. Redirecting to login...");
        setIsExpired(true);
        clearInterval(interval); // Stop checking once token is expired
      }
    }, 1000); // Check every second

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [token]);

  useEffect(() => {
    // Redirect if token is expired
    if (isExpired) {
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000); // 3 seconds delay before redirecting
    }
  }, [isExpired, navigate]);

  // Handle role-based access
  if (user && admin && user.role !== "admin" && user.role !== "superAdmin") {
    return <Navigate to="/login" replace={true} />;
  }

  // Show expiration message and redirect
  if (isExpired) {
    return (
      <div>
        <p>{errorMessage}...</p>
      </div>
    );
  }

  return <>{children}</>; // Render children if everything is valid
};

export default ProtectedRoute;

// import { ReactNode } from "react";
// import { Navigate } from "react-router-dom";
// import { getUserInfo } from "../utils/localStorageAuthManagemet";
// import { JwtPayload, verifyToken } from "../utils/verifyToken";

// type TProtectedRoute = {
//   children: ReactNode;
//   admin?: boolean;
// };

// const ProtectedRoute = ({ children }: TProtectedRoute) => {
//   const token = getUserInfo();

//   let user: JwtPayload | undefined;

//   if (!token) {
//     return <Navigate to="/login" replace={true} />;
//   }

//   if (token !== null && typeof token === "string") {
//     user = verifyToken(token);

//     if (!user) {
//       return <Navigate to="/login" replace={true} />;
//     }
//   }

//   if (user?.role !== "admin" && user?.role !== "superAdmin") {
//     return <Navigate to="/login" replace={true} />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;
