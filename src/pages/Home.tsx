import React from "react";
// import { Card } from "antd"
import Card from "../components/Base/Card";
// import ListCoin from "../components/CoinList/ListCoin";

const Home: React.FC = () => {
  return (
    <div>
      <p style={{ fontWeight: "normal", color: "#ACBCCF" }}>Home</p>
      <Card title="Home">
        <div>Ini adalah halaman Home</div>
      </Card>
    </div>
  );
};

export default Home;
