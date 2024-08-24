import { BiSolidDashboard, BiUserPlus } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { GiVerticalBanner } from "react-icons/gi";
import { GrVirtualMachine, GrVmMaintenance } from "react-icons/gr";
import { IoMdPhotos } from "react-icons/io";
import {
  LuCalendarClock,
  LuGitBranch,
  LuGitBranchPlus,
  LuSettings,
  LuUserCircle2,
} from "react-icons/lu";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdAddPhotoAlternate } from "react-icons/md";
import { Link } from "react-router-dom";

export const sidebarItems = [
  {
    key: 1,
    icon: <BiSolidDashboard />,
    label: <Link to={"/"}>Dashboard</Link>,
  },
  {
    key: 10,
    icon: <GiVerticalBanner />,
    label: <Link to={"/banners&notice"}>Banners & Notices</Link>,
  },
  {
    key: 7888,
    icon: <MdOutlineAddPhotoAlternate />,
    label: <Link to={"/add-about-us-photo"}>Add About Us Photo</Link>,
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
    key: 7898,
    icon: <IoMdPhotos />,
    label: <Link to={"/all-gallery"}>All Gallery</Link>,
    children: [
      {
        key: 7878,
        icon: <MdAddPhotoAlternate />,
        label: <Link to={"/add-gallery"}>Add Gallery</Link>,
      },
    ],
  },
  {
    key: 5,
    icon: <FaUserDoctor />,
    label: <Link to={"/all-doctors-schedules"}>All Doctor's Schedules</Link>,
    children: [
      {
        key: 51,
        icon: <BiUserPlus />,
        label: <Link to={"/add-doctor-schedules"}>Add Doctor's Schedules</Link>,
      },
    ],
  },
  {
    key: 6,
    icon: <LuCalendarClock />,
    label: <Link to={"/all-appointments"}>All Appointments</Link>,
  },
  {
    key: 10,
    label: (
      <p className="text-lg font-semibold border-t-2 pt-1"> Diagnostics</p>
    ),
  },
  {
    key: 7,
    icon: <FaUserDoctor />,
    label: <Link to="/all-diagnostics-doctor">Di. All Doctor's</Link>,
    children: [
      {
        key: 70,
        icon: <BiUserPlus />,
        label: <Link to={"/add-diagnostics-doctor"}>Di. Add Doctor</Link>,
      },
    ],
  },
  {
    key: 74,
    icon: <GrVirtualMachine />,
    label: <Link to={"/all-diagnostic-machines"}>Di. All Machines</Link>,
    children: [
      {
        key: 84,
        icon: <GrVmMaintenance />,
        label: <Link to={"/add-diagnostic-machine"}>Di. Add Machine</Link>,
      },
    ],
  },
  {
    key: 875,
    icon: <FaUserDoctor />,
    label: (
      <Link to={"/all-diagnostic-doctors-schedules"}>
        Di. All Doctor's Schedules
      </Link>
    ),
    children: [
      {
        key: 879,
        icon: <BiUserPlus />,
        label: (
          <Link to={"/add-diagnostic-doctor-schedules"}>
            Di. Add Doctor's Schedules
          </Link>
        ),
      },
    ],
  },
  {
    key: 10,
    label: <p className="text-lg font-semibold border-t-2 pt-1">Other</p>,
  },
  {
    key: 45,
    icon: <LuUserCircle2 />,
    label: <Link to={"/users"}>Users</Link>,
    children: [
      {
        key: 46,
        icon: <BiUserPlus />,
        label: <Link to={"/add-user"}>Add User</Link>,
      },
    ],
  },

  {
    key: 9,
    icon: <LuSettings />,
    label: <Link to={"/settings"}>Settings</Link>,
  },
];
