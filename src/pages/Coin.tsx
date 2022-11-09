import { Input, Dropdown, Button, Space,message } from "antd";
import Card from "../components/Base/Card";
import ListCoin from "../components/CoinList/ListCoin";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { useGetCoinsQuery } from "../services/Api";

const Coin: React.FC = () =>  {

  const { data, isLoading, isFetching, isSuccess } =  useGetCoinsQuery();


  return (
    <div>
      <p style={{ fontWeight: "normal", color: "#ACBCCF" }}>Coint List</p>
      <Card title="Coin List">
        <Input
          placeholder="Search"
          style={{ marginBottom: "15px", width: "300px" }}
          prefix={<SearchOutlined />}
        />
        <ListCoin dataNew2={data} isSuccess={isSuccess} isLoading={isLoading} />
      </Card>
    </div>
  )
};

export default Coin;
