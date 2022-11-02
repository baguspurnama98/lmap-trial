import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CoinList from "../pages/CoinDetail";
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
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouteList;
