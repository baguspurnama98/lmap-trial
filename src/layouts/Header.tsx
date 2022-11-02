import React, { createElement } from "react";
import { Menu, Layout } from "antd";
import "./index.css";
import { SmileOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
interface Props {
  collapsed: boolean;
  onChangeCollapsed: () => void;
}
// const useCurrentPath = () => {
//   const location = useLocation()
//   // const [{ route }] = matchRoutes(routes, location)

//   return location
// }

// let navigate = useNavigate();
// const routeChange = (url) => {
//   let path = `url`;
//   navigate(path);
// };

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
      <div className="logo" style={{ fontWeight: "bold", fontSize: "18px", margin:"auto" }}>
        Latihan LMAP
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
       
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/home" />
          Home
        </Menu.Item>
        <Menu.Item key="coin" icon={<SmileOutlined />}>
          <Link to="/coin-list" />
          Coin List
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
