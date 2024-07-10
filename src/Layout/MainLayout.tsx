import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { CustomIcons } from "./CustomIcon/CustomIcons";
// import NavDropDown from "./NavDropdown";
import "../styles/background-outlet.css";
import "../styles/antd-overwrite.css";
import { Footer } from "antd/es/layout/layout";
const { Header, Content, Sider } = Layout;
import logoThik from "../assets/image/labOneLogoThik.png";
// import logoIcon from "../assets/image/favicon.png";

const menuItems = [
  {
    key: 1,
    icon: <CustomIcons.MenuIcon />,
    label: <Link to={"/"}>Dashboard</Link>,
  },
  {
    key: 2,
    icon: <CustomIcons.CustomerIcon />,
    label: <Link to={"/all-doctors"}>All Doctors</Link>,
  },
  {
    key: 3,
    icon: <CustomIcons.StoreIcon />,
    label: <Link to={"/stores"}>Store</Link>,
  },
  {
    key: 4,
    icon: <CustomIcons.OfferIcon />,
    label: <Link to={"/offer"}>Offer</Link>,
  },
  {
    key: 5,
    icon: <CustomIcons.TransactionsIcon />,
    label: <Link to={"/transactions"}>Transactions</Link>,
  },
  {
    key: 6,
    icon: <CustomIcons.ValidateIcon />,
    label: <Link to={"/validate-receipt"}>Validate receipt</Link>,
  },

  {
    key: 7,
    icon: <CustomIcons.InventoryIcon />,
    label: <Link to={"/inventory"}>Inventory</Link>,
  },
  {
    key: 8,
    icon: <CustomIcons.SettingIcon />,
    label: <Link to={"/settings"}>Settings</Link>,
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
          width={200}
          collapsible
        >
          <Link to="/">
            <div className="flex items-center justify-center gap-3 cursor-pointer py-2">
              {/* <img className="w-12" src={logo} alt="logo" />
              <div>
                <h2 className="text-[26px] leading-[1em] font-bold text-primary">
                  Lab One
                </h2>
                <h3 className="text-[26px] leading-[1em] font-bold text-secondary">
                  Hospital
                </h3>
              </div> */}
              <img className="w-2/5" src={logoThik} alt="logo" />
            </div>
          </Link>
          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={["1"]}
            items={menuItems}
            // className="!min-h-[calc(100vh-60px)]"
          />
        </Sider>

        <Layout>
          <Header className="!px-4 sticky top-0 !bg-white !h-[60px] flex flex-col justify-center border-b z-50">
            <div>
              <h2 className="text-[26px] leading-[1em] font-bold text-primary uppercase">
                LabOne <span className="text-secondary">Hospital</span>
              </h2>
            </div>
            {/* <div className="flex flex-col items-center ms-auto text-right">
              <NavDropDown />
            </div> */}
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
