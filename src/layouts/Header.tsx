import React, { createElement } from "react";
import { Menu, Layout } from "antd";
import "./index.css";
import { SmileOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
interface Props {
  collapsed: boolean;
  onChangeCollapsed: () => void;
}

const { Header } = Layout;
export const AppHeader: React.FC<Props> = ({
  collapsed,
  onChangeCollapsed,
}) => {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div className="logo my-auto" style={{ fontWeight: "bold", fontSize: "18px", margin:"auto" }}>
        Latihan LMAP
      </div>
      <Menu mode="horizontal" className="my-auto">
       
        <Menu.Item key="home" className="py-0 my-0 font-bold" icon={<HomeOutlined className="align-middle"/>}>
          <Link to="/home" />
          Home
        </Menu.Item>
        <Menu.Item key="coin" className="py-0 my-0 font-bold" icon={<SmileOutlined className="align-middle"/>}>
          <Link to="/coin-list" />
          Coin List
        </Menu.Item>
      </Menu>
    </Header>
  );
};
