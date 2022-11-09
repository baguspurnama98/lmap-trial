import { ICoin } from "../../services/Api";
import { Table, Modal, Button, Skeleton } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetCoinsQuery } from "../../services/Api";
import * as Action from "../../redux/actions";
import { useAppDispatch } from "../../redux/store";
import { addCoin, deleteCoin } from "../../services/Api";

interface IMyProps {
  dataNew2: any;
  isSuccess: any;
  isLoading: any;
}
const ListCoin: React.FC<IMyProps> = (props) => {
  // var posts = useSelector(allPosts);
  var dispatch = useDispatch();

  // const {
  //   data: posts,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error
  // } = useGetPostsQuery()

  // console.log(props.dataNew2)
  // const { data, isLoading, isFetching, isSuccess } =  useGetCoinsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelected, setItem] = useState<any>("");
  // const listData = useSelector((state) => state.masterParameter.data)
  // console.log(data)
  // if(isSuccess){
  // const data2 = useSelector((state:any) => state.coins.queries["getCoins(undefined)"].data)
  // console.log(data2)
  // }

  // if(isSuccess){
  //   dispatch(addCoin(data));

  // }

  // const [dataNew, setData] = useState(data);
  // const [status, setStatus] = useState(false);

  // useEffect(() => {
  //   if (isSuccess) {
  //     setData(data);
  //     setStatus(false)

  //   }

  //   if (status) {
  //     setData(data);
  //   }

  // });

  // console.log(dataNew);

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
    console.log(props.dataNew2);

    // const dispatch = useAppDispatch();
    // dispatch(Action.deteleData(itemSelected));
    // const dataDeleted = dataNew?.filter((item) => item["id"] != itemSelected);
    const dataDeleted = props.dataNew2?.filter(
      (item) => item["id"] !== itemSelected
    );
    // useEffect(() => {
    // setData(dataDeleted);

    // useDeleteCoinMutation(itemSelected);

    // }, []);
    // setStatus(true)

    console.log(dataDeleted);
    dispatch(deleteCoin(itemSelected));

    // console.log(itemSelected);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!props.isLoading ? (
        <Table
          columns={columns}
          dataSource={props.dataNew2}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      ) : (
        <Skeleton active />
      )}

      <Modal
        title="Hapus Data"
        centered
        open={isModalOpen}
        onOk={useHandleOk}
        onCancel={handleCancel}
      >
        <p>
          Yakin Hapus Data{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            {itemSelected}
          </span>{" "}
          ?
        </p>
      </Modal>
    </>
  );
};

export default ListCoin;
