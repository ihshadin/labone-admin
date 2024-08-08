import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
// import NavDropDown from "./NavDropdown";
import "../styles/background-outlet.css";
import "../styles/antd-overwrite.css";
import { Footer } from "antd/es/layout/layout";
const { Header, Content, Sider } = Layout;

// import logoThik from "../assets/image/labOneLogoThik.png";
import logoIcon from "../assets/image/favicon.png";
import NavDropDown from "./NavDropdown";
import { sidebarItems } from "./SidebarItems";

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
            overflow: "auto",
            scrollbarWidth: "revert"
          }}
          className="customScroll"
          
          width={250}

          // collapsible
        >
          <Link to="/">
            <div className="flex items-center justify-center md:justify-start md:ml-7 gap-1.5 cursor-pointer py-2">
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
            items={sidebarItems}
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
            Labone Hospital ©{new Date().getFullYear()} Created by WebSyner
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
