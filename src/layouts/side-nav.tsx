import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
interface SideNavComponentProps {
  setMenu: React.Dispatch<React.SetStateAction<string>>;
}

export const SideNavComponent: React.FC<SideNavComponentProps> = ({
  setMenu,
}) => {
  const collapsed = false;

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  console.log(isMobile);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="side-bar"
    >
      <div className="demo-logo-vertical" />
      <div className="top-logo">
        <img src="images/logo.png" alt="" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={(e) => setMenu(e?.key)}
        items={[
          {
            key: "1",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "Roles",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "StartUp",
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: "Investor",
          },
          {
            key: "5",
            icon: <UploadOutlined />,
            label: "Category",
          },
          {
            key: "6",
            icon: <UploadOutlined />,
            label: "Mentor",
          },
          {
            key: "7",
            icon: <UserOutlined />,
            label: "Sub Admin",
          },
        ]}
      />
    </Sider>
  );
};
