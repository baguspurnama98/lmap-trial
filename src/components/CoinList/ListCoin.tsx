import "./index.css";

import { Table, Row, Popover, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

interface DataType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_active: string;
  type: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
    width: 150,
  },
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Symbol",
    dataIndex: "symbol",
    width: 100,
  },
  {
    title: "Rank",
    dataIndex: "rank",
    width: 100,
  },
  {
    title: "Type",
    dataIndex: "type",
    width: 150,
  },

  {
    title: "Active",
    dataIndex: "is_active",
    width: 150,
  },
  {
    title: "Action",
    dataIndex: "action",
    width: 150,
    align: "center",
    render: (text, record) => (
      <Button type="primary" danger onClick={() => console.log(record)}>{"Delete"}</Button>
    ),
  },
];

const data: DataType[] = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    // is_new: false,
    is_active: "True",
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    // is_new: false,
    is_active: "True",
    type: "coin",
  },
];

const ListCoin: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{ pageSize: 50 }}
    scroll={{ y: 240 }}
  />
);

export default ListCoin;
