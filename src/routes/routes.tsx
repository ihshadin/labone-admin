import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../Layout/ProtectedRoute";
import MainLayout from "../Layout/MainLayout";
import AllAppointments from "../pages/Appointments/AllAppointments";
import AllDoctors from "../pages/Doctors/AllDoctors";
import AddDoctor from "../pages/Doctors/AddDoctor";
import NotFoundPage from "../pages/ErrorPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute isAdmin={true}>
        <MainLayout />
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
      {
        path: "/add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "/all-machines",
        element: <p>all-appointments</p>,
      },
      {
        path: "/add-machine",
        element: <p>add machine</p>,
      },
      {
        path: "/all-departments",
        element: <p>All Departments</p>,
      },
      {
        path: "/add-department",
        element: <p>Add Department</p>,
      },
      {
        path: "/all-chamber-doctors",
        element: <p>All Chamber Doctors</p>,
      },
      {
        path: "/add-chamber-doctor",
        element: <p>Add Chamber Doctor</p>,
      },
      {
        path: "/all-appointments",
        element: <AllAppointments />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },

  // {
  //   path: "/all-doctors",
  //   element: <AllDoctors />,
  // },
]);

export default router;
