import { Empty, Layout, theme } from "antd";
import { Content, Footer } from "antd/es/layout/layout";

import { HeaderComponent } from "./header";
import { SideNavComponent } from "./side-nav";
import { DashboardComponent } from "../dashboard";
import { useEffect, useState } from "react";
import { SubAdmin } from "../sub-admin";

export const LayoutComponent = () => {
  const [menu,setMenu] = useState<string>("1");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isMobile?<SideNavComponent setMenu={setMenu} />:null}
      <Layout>
        <HeaderComponent isMobile={isMobile} />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {
            menu === "1"?
            <DashboardComponent />:null
          }
          {
            menu === "7"?
            <SubAdmin />:null
          }
          {
            menu !== "1" && menu !== "7" ?
            <Empty description="Under Development" />:null
          }
          
        </Content>
        <Footer>Developed by Mohan Shanmugam</Footer>
      </Layout>
    </Layout>
  );
};
