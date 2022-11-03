import React from "react";
import "./index.css";
import { Layout } from "antd";
// import { screen } from "@testing-library/react";


interface Props {
  children: React.ReactNode;
}

const { Content } = Layout;

export const AppContent: React.FC<Props> = ({ children }) => {
  return (
    <Content
      className="site-layout-background"
      style={{ padding: "0 25px", marginTop: 64, minHeight:"100vh" }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380, width:"100%" }}
      >
        {children}
      </div>
    </Content>
  );
};
