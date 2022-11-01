import React, { useState } from "react";
import { Layout } from "antd";
import { AppHeader } from "./Header";
import { AppContent } from "./Content";
import { AppFooter } from "./Footer";
import "antd/dist/antd.css";
import "./index.css";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onChangeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="app-layout">
      <Layout className="app-main">
        <AppHeader
          collapsed={collapsed}
          onChangeCollapsed={onChangeCollapsed}
        />
        <AppContent>{children}</AppContent>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
