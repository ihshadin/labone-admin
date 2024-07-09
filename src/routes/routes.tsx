import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "../Layout/ProtectedRoute";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute isAdmin={true}>
        <MainLayout/>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <div>this is test routes</div>,
      },
    ],
  },

  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);

export default router;
