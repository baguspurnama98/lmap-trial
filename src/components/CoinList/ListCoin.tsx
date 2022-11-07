import "./index.css";
import { ICoin } from "../../services/Api";
import { Table, Modal, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetCoinsQuery } from "../../services/Api";
import * as Action from "../../redux/actions";
import { useAppDispatch } from "../../redux/store";
import { deleteCoin } from "../../services/Api";

const ListCoin: React.FC = () => {
  // var posts = useSelector(allPosts);
  var dispatch = useDispatch();
  const { data, isLoading, isFetching } = useGetCoinsQuery();
  console.log(useGetCoinsQuery())
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelected, setItem] = useState(0);
  // console.log(isLoading, isFetching)
  // https://redux-toolkit.js.org/rtk-query/usage/queries

  const onDelete = (record) => {
    setIsModalOpen(true);
    setItem(record);
  };

  const columns: ColumnsType<ICoin> = [
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

  const useHandleOk = () => {
    // const dispatch = useAppDispatch();
    // dispatch(Action.deteleData(itemSelected));

    dispatch(
      deleteCoin(itemSelected)
    );

    console.log(itemSelected);
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
        onOk={useHandleOk}
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
