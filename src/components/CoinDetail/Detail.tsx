import "./index.css";
// import { ICoin } from "../../services/Api";
// import { Table, Modal, Button } from "antd";
// import type { ColumnsType } from "antd/es/table";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetDetailQuery } from "../../services/Api";
// import * as Action from "../../redux/actions";
// import { useAppDispatch } from "../../redux/store";
// import { deleteCoin } from "../../services/Api";

const DetailCoin: React.FC = () => {
//   var dispatch = useDispatch();
  const currentURL = window.location.pathname.split("/");
  const currentID = currentURL[currentURL.length - 1];
  console.log(currentID);
  const { data, isLoading, isFetching, isSuccess } =
    useGetDetailQuery(currentID);
    console.log(useGetDetailQuery(currentID))
    // useEffect(() => {
    //     if (isSuccess) {
    //       setData(data);
    //       setStatus(false)
    //     }
    
    //     if (status) {
    //       setData(data);
    //     }
    
    //   });
  return (

    <>
    {isLoading?
    
    <div>Tunggu sebentar</div>
    :

<div>
        <div>Nama: {data.name}</div>
        <div>ID: {data.id}</div>
        <div>Is Active: {data.is_active ? "True" : "False"}</div>
        <div>Is New: {data.is_new ? "True" : "False"}</div>
        <div>Type: {data.type}</div>
        <div>Rank: {data.rank}</div> 
        <img src={data.logo}/>
      </div>
}
</>
      
    
  );
};

export default DetailCoin;
