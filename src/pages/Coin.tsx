import React from "react";
// import { Card } from "antd"
import Card from "../components/CoinList/Card";
import ListCoin from "../components/CoinList/ListCoin";

const Coin: React.FC = () => {
  return (
    <div>
      <p style={{ fontWeight: "normal", color: "#ACBCCF" }}>Coint List</p>
      <Card title="Coin List">
        <ListCoin/>
      </Card>
    </div>
  );
};

export default Coin;
