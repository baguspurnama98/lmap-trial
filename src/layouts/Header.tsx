import React, { createElement } from "react";
import { Menu, Layout } from "antd";
import "./index.css";
import { SmileOutlined, HomeOutlined } from '@ant-design/icons';

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
      <div className="logo" style={{ fontWeight: "bold", fontSize: "18px" }}>
        Latihan LMAP
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={["coin"]}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item
          key="coin"
          icon={<SmileOutlined />}
        > Coin List
          {/* <Menu.Item key="two" icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
          <Menu.Item key="three" icon={<AppstoreOutlined />}>
            Navigation Three
          </Menu.Item>
          <Menu.ItemGroup title="Item Group">
            <Menu.Item key="four" icon={<AppstoreOutlined />}>
              Navigation Four
            </Menu.Item>
            <Menu.Item key="five" icon={<AppstoreOutlined />}>
              Navigation Five
            </Menu.Item>
          </Menu.ItemGroup> */}
        </Menu.Item>
      </Menu>
    </Header>
  );
};
