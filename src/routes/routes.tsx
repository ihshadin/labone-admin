import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../Layout/ProtectedRoute";
import MainLayout from "../Layout/MainLayout";
import AllAppointments from "../pages/Appointments/AllAppointments";
import AllDoctors from "../pages/Doctors/AllDoctors";
import AddDoctor from "../pages/Doctors/AddDoctor";
import NotFoundPage from "../pages/ErrorPage/NotFoundPage";
import AllMachines from "../pages/Machines/AllMachines";
import AllDepartments from "../pages/Departments/AllDepartments";
import Home from "../pages/Home/Home";


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
        element: <Home/>,
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
        element: <AllMachines/>,
      },
      {
        path: "/add-machine",
        element: <p>add machine</p>,
      },
      {
        path: "/all-departments",
        element: <AllDepartments/>,
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
