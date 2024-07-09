// Store user information in local storage
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("accessToken", accessToken);
  }
};

// Retrieve user information from local storage
export const getUserInfo = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
};

// Remove user information from local storage
export const removeFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("accessToken");
  }
};

// Check if the user is logged in
export const isLoggedIn = () => {
  const authToken = getUserInfo();
  return !!authToken;
};
