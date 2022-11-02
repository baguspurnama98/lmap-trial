import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CoinList from "../pages/Coin";
import CoinDetail from "../pages/DetailCoin";
import Home from "../pages/Home";
import Error from "../pages/Error";

const RouteList: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/home" replace />}
    />
      <Route path="coin-list" element={<CoinList />} />
      <Route path="detail-coin/:id" element={<CoinDetail />} />
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouteList;
