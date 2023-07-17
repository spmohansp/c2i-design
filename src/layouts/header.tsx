import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, theme } from "antd";
import { Header } from "antd/es/layout/layout";

export const HeaderComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const collapsed = false;
  return (
    <Header style={{ padding: 0, background: colorBgContainer }} className="top-header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};
