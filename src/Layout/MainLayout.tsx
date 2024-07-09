import { Image, Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { CustomIcons } from "./CustomIcon/CustomIcons";
import NavDropDown from "./NavDropdown";
const { Header, Content, Sider } = Layout;
import logo from "../assets/image/labOneLogo.png";

const menuItems = [
  {
    key: 1,
    icon: <CustomIcons.MenuIcon />,
    label: <Link to={"/"}>Dashboard</Link>,
  },
  {
    key: 2,
    icon: <CustomIcons.CustomerIcon />,
    label: <Link to={"/customers"}>Customers</Link>,
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
      >
        <Link to="/">
          <div className="pl-7 pt-2 !h-[80px] flex items-center cursor-pointer">
            <Image preview={false} src={logo} alt="logo" className="!h-[80px]" />
          </div>
        </Link>

        <Menu
          mode="inline"
          theme="light"
          items={menuItems}
          className="!min-h-[calc(100vh-60px)]"
        />
      </Sider>

      <Layout>
        <Header className="!px-4 sticky top-0 !bg-white !h-[60px] flex flex-col justify-center text-right border-b z-50">
          <div className="flex flex-col items-center ms-auto text-right">
            <NavDropDown />
          </div>
        </Header>
        <Content>
          <div
            style={{
              minHeight: "calc(100vh - 60px)",
              backgroundColor: "white",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
