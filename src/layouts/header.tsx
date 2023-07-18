import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import './style.css'
interface HeaderComponentProps {
  isMobile: boolean;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  isMobile,
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const collapsed = false;

  return (
    <Header
      style={{ padding: 0, background: colorBgContainer }}
      className="top-header"
    >
      {isMobile ? (
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      ) : null}
    </Header>
  );
};
