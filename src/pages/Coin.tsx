import type { MenuProps } from 'antd';
import { Input, Dropdown, Button, Space,message } from "antd";
import Card from "../components/CoinList/Card";
import ListCoin from "../components/CoinList/ListCoin";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";


const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Coin: React.FC = () =>  (
    <div>
      <p style={{ fontWeight: "normal", color: "#ACBCCF" }}>Coint List</p>

      <Card title="Coin List">
        
        {/* <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown> */}

        <Input
          placeholder="Search"
          style={{ marginBottom: "15px", width: "300px" }}
          prefix={<SearchOutlined />}
        />
        <ListCoin />
      </Card>
    </div>
  );

export default Coin;
