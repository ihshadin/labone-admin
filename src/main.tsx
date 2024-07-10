import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ConfigProvider } from "antd";

const theme = {
  token: {
    colorPrimary: "#0a8848",
    colorPrimaryBg: "#f2fff8",
    colorPrimaryHover: "#0a8848",
    colorLink: "#0a8848",
    colorPrimaryBgHover: "#f2fff8",
    colorBgTextActive: "#f2fff8",
    colorBgTextHover: "#f2fff8",
    // colorBgContainer: "#0a8848",
    fontFamily: "inherit",
  },
  components: {
    Menu: {
      itemBg: "",
      itemBgHover: "#f70920",
      itemTextHover: "#f70920",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
    <Toaster richColors expand={true} position="top-center" />
  </Provider>
);
