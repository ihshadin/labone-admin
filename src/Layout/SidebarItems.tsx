import { BiSolidDashboard, BiUserPlus } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { GrVirtualMachine, GrVmMaintenance } from "react-icons/gr";
import {
  LuCalendarCheck2,
  LuCalendarClock,
  LuCalendarSearch,
  LuCalendarX2,
  LuGitBranch,
  LuGitBranchPlus,
  LuSettings,
  LuUserCircle2,
} from "react-icons/lu";
import { Link } from "react-router-dom";

export const sidebarItems = [
  {
    key: 1,
    icon: <BiSolidDashboard />,
    label: <Link to={"/"}>Dashboard</Link>,
  },
  {
    key: 2,
    icon: <FaUserDoctor />,
    label: <Link to={"/all-doctors"}>All Doctors</Link>,
    children: [
      {
        key: 21,
        icon: <BiUserPlus />,
        label: <Link to={"/add-doctor"}>Add Doctor</Link>,
      },
    ],
  },
  {
    key: 3,
    icon: <GrVirtualMachine />,
    label: <Link to={"/all-machines"}>All Machines</Link>,
    children: [
      {
        key: 31,
        icon: <GrVmMaintenance />,
        label: <Link to={"/add-machine"}>Add Machine</Link>,
      },
    ],
  },
  {
    key: 4,
    icon: <LuGitBranch />,
    label: <Link to={"/all-departments"}>All Departments</Link>,
    children: [
      {
        key: 41,
        icon: <LuGitBranchPlus />,
        label: <Link to={"/add-department"}>Add Department</Link>,
      },
    ],
  },
  {
    key: 5,
    icon: <FaUserDoctor />,
    label: <Link to={"/all-chamber-doctors"}>All Chamber Doctor's</Link>,
    children: [
      {
        key: 51,
        icon: <BiUserPlus />,
        label: <Link to={"/add-chamber-doctor"}>Add Chamber Doctor's</Link>,
      },
    ],
  },
  {
    key: 6,
    icon: <LuCalendarClock />,
    label: <Link to={"/all-appointments"}>All Appointments</Link>,
    children: [
      {
        key: 61,
        icon: <LuCalendarSearch />,
        label: <Link to={"/pending-appointments"}>Pending Appointments</Link>,
      },
      {
        key: 62,
        icon: <LuCalendarCheck2 />,
        label: <Link to={"/approved-appointments"}>Approved Appointments</Link>,
      },
      {
        key: 63,
        icon: <LuCalendarX2 />,
        label: <Link to={"/cancel-appointments"}>Cancel Appointments</Link>,
      },
    ],
  },
  {
    key: 7,
    icon: <LuUserCircle2 />,
    label: <Link to={"/users"}>Users</Link>,
  },
  {
    key: 8,
    icon: <LuSettings />,
    label: <Link to={"/settings"}>Settings</Link>,
  },
  // {
  //   key: 9,
  //   icon: <LuStopCircle />,
  //   label: <Link to={"/forget-password"}>Forget Password</Link>,
  // },
];