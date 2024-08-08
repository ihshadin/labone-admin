import { createBrowserRouter } from "react-router-dom";
// import ProtectedRoute from "../Layout/ProtectedRoute";
import MainLayout from "../Layout/MainLayout";
import NotFoundPage from "../pages/ErrorPage/NotFoundPage";
import Home from "../pages/Home/Home";
import AllDoctors from "../pages/Doctors/AllDoctors";
import AddDoctor from "../pages/Doctors/AddDoctor";
import AllMachines from "../pages/Machines/AllMachines";
import AddMachine from "../pages/Machines/AddMachine";
import AllDepartments from "../pages/Departments/AllDepartments";
import AddDepartment from "../pages/Departments/AddDepartment";
import AllAppointments from "../pages/Appointments/AllAppointments";
import AllSchedules from "../pages/DoctorsSchedules/AllSchedules";
import Login from "../pages/Auth/Login";
import Settings from "../pages/Settings/Settings";
import Users from "../pages/Users/Users";
import ForgetPassword from "../pages/Auth/ResetPassword";
import ResetPassword from "../pages/Auth/ForgetPassword";
import AddDiagnosticsDoctor from "../pages/Doctors/AddDiagnosticsDoctor";
import AllDiagnosticsDoctors from "../pages/Doctors/AllDiagnosticsDoctors";
import DiagnosticsAddMachines from "../pages/Machines/DiagnosticsAddMachines";
import DiagnosticsAllMachines from "../pages/Machines/DiagnosticsAllMachines";
import PendingAppointments from "../pages/Appointments/PendingAppointments";
import ApprovedAppointments from "../pages/Appointments/ApprovedAppointments";
import CancelAppointments from "../pages/Appointments/CancelAppointments";
import AddDoctorSchedules from "../pages/DoctorsSchedules/AddDoctorSchedules";
import AddUser from "../pages/Users/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
        <MainLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/add-diagnostics-doctor",
        element: <AddDiagnosticsDoctor />,
      },
      {
        path: "/all-diagnostics-doctor",
        element: <AllDiagnosticsDoctors />,
      },
      {
        path: "/all-machines",
        element: <AllMachines />,
      },
      {
        path: "/all-diagnostic-machines",
        element: <DiagnosticsAllMachines />,
      },
      {
        path: "/add-diagnostic-machine",
        element: <DiagnosticsAddMachines />,
      },
      {
        path: "/add-machine",
        element: <AddMachine />,
      },
      {
        path: "/all-departments",
        element: <AllDepartments />,
      },
      {
        path: "/add-department",
        element: <AddDepartment />,
      },
      {
        path: "/all-doctors-schedules",
        element: <AllSchedules />,
      },
      {
        path: "/add-doctor-schedules",
        element: <AddDoctorSchedules/>,
      },
      {
        path: "/all-appointments",
        element: <AllAppointments />,
      },
      {
        path: "/pending-appointments",
        element: <PendingAppointments />,
      },
      {
        path: "/approved-appointments",
        element: <ApprovedAppointments />,
      },
      {
        path: "/cancel-appointments",
        element: <CancelAppointments />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/add-user",
        element: <AddUser/>,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
]);

export default router;
