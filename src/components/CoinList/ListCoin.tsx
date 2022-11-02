import "./index.css";

import { Table, Modal, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface DataType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_active: boolean;
  type: string;
}
const baseURL = "https://api.coinpaprika.com/v1/coins/";

const ListCoin: React.FC = () => {
  const [data, getData] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      getData(response.data);
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelected, setItem] = useState(0);

  const onDelete = (record) => {
    setIsModalOpen(true);
    setItem(record);
    console.log(data);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      width: 150,
      render: (text) => (
        <div>
          <Link to={"/detail-coin/" + text}>{text}</Link>
        </div>
      ),
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
      render: (text) => (text == true ? "Yes" : "No"),
      
    },
    {
      title: "Action",
      dataIndex: "action",
      width: 150,
      align: "center",
      render: (text, record) => (
        <Button type="primary" danger onClick={() => onDelete(record.id)}>
          {"Delete"}
        </Button>
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
      />

      <Modal
        title="Hapus Data"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Yakin Hapus Data{" "}
          <span style={{ color: "blue", fontWeight: "bold" }}>
            {itemSelected}
          </span>{" "}
          ?
        </p>
      </Modal>
    </>
  );
};

export default ListCoin;
