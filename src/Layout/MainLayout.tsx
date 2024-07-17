import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
// import NavDropDown from "./NavDropdown";
import "../styles/background-outlet.css";
import "../styles/antd-overwrite.css";
import { Footer } from "antd/es/layout/layout";
const { Header, Content, Sider } = Layout;
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
  LuStopCircle,
  LuUserCircle2,
} from "react-icons/lu";

// import logoThik from "../assets/image/labOneLogoThik.png";
import logoIcon from "../assets/image/favicon.png";
import NavDropDown from "./NavDropdown";

const menuItems = [
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
  {
    key: 9,
    icon: <LuStopCircle />,
    label: <Link to={"/forget-password"}>Forget Password</Link>,
  },
  
];

const MainLayout = () => {
  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          theme="light"
          collapsedWidth="0"
          style={{
            height: "100vh",
            position: "sticky",
            top: "0",
            left: "0",
          }}
          width={250}
          // collapsible
        >
          <Link to="/">
            <div className="flex items-center justify-center gap-1.5 cursor-pointer py-2">
              <img className="w-[52px]" src={logoIcon} alt="logo" />
              <div className="text-xl leading-[1em] italic font-extrabold">
                <h2 className="text-primary">Lab One</h2>
                <h3 className="text-secondary">Hospital</h3>
              </div>
              {/* <img className="w-14" src={logoIcon} alt="logo" /> */}
            </div>
          </Link>

          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={["1"]}
            items={menuItems}
            className="[&_li:hover]:!text-primary [&_li:hover>div]:!text-primary *:font-medium"
            // className="!min-h-[calc(100vh-60px)]"
          />
        </Sider>

        <Layout>
          <Header className="!px-4 sticky top-0 !bg-white !h-[60px] flex flex-col justify-center border-b z-50">
            {/* <div>
              <h2 className="text-2xl leading-[1em] font-bold text-primary uppercase">
                LabOne <span className="text-secondary">Hospital</span>
              </h2>
            </div> */}
            <div className="flex flex-col items-center ms-auto text-right">
              <NavDropDown />
            </div>
          </Header>
          <Content>
            <div className="min-h-[calc(100vh-150px)] p-3 md:p-5">
              <div className="labone-body-gradient"></div>
              <div className="labone-body-gradient-lines">
                <div className="labone-body-gradient-line"></div>
                <div className="labone-body-gradient-line"></div>
                <div className="labone-body-gradient-line"></div>
                <div className="labone-body-gradient-line"></div>
              </div>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Labone Hospital ©{new Date().getFullYear()} Created WebSyner
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
