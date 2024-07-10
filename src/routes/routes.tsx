import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "../Layout/ProtectedRoute";
import MainLayout from "../Layout/MainLayout";
import AllDoctors from "../pages/AllDoctors/AllDoctors";

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
      {
        path: "/all-doctors",
        element: <AllDoctors />,
      },
    ],
  },

  // {
  //   path: "/all-doctors",
  //   element: <AllDoctors />,
  // },
]);

export default router;
