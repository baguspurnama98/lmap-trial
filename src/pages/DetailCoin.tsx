import React from "react";
// import { Card } from "antd"
import Card from "../components/CoinDetail";
import InfoCoin from "../components/CoinDetail/Detail";

const DetailCoin: React.FC = () => {
  return (
    <div>
      <p style={{ fontWeight: "normal", color: "#ACBCCF" }}>Coint Detail</p>
      <Card title="Coin Detail">
       <InfoCoin/>
      </Card>
    </div>
  );
};

export default DetailCoin;
