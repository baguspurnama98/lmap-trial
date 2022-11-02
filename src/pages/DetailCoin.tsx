import React from "react";
// import { Card } from "antd"
import Card from "../components/CoinList/Card";
// import ListCoin from "../components/CoinList/ListCoin";

const DetailCoin: React.FC = () => {
  return (
    <div>
      <p style={{ fontWeight: "normal", color: "#ACBCCF" }}>Coint Detail</p>
      <Card title="Coin Detail">
       <div>Ini Halaman Detail</div>
      </Card>
    </div>
  );
};

export default DetailCoin;
