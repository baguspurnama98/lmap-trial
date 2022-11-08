import React, { useState, useEffect } from "react";
import { useGetDetailQuery } from "../../services/Api";
import { Skeleton } from 'antd';

const DetailCoin: React.FC = () => {
  const currentURL = window.location.pathname.split("/");
  const currentID = currentURL[currentURL.length - 1];
  console.log(currentID);
  const { data, isLoading, isFetching, isSuccess } =
    useGetDetailQuery(currentID);

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <table className="my-auto text-lg">
            <tbody>
              <tr>
                <td className="">Nama:</td>
                <td className="font-bold">{data.name}</td>
              </tr>
              <tr>
                <td className="">ID:</td>
                <td className="font-bold">{data.id}</td>
              </tr>
              <tr>
                <td className="">Is Active:</td>
                <td className="font-bold">
                  {data.is_active ? "True" : "False"}
                </td>
              </tr>
              <tr>
                <td className="">Is New:</td>
                <td className="font-bold">{data.is_new ? "True" : "False"}</td>
              </tr>
              <tr>
                <td className="">Type:</td>
                <td className="font-bold">{data.type}</td>
              </tr>
              <tr>
                <td className="">Rank:</td>
                <td className="font-bold">{data.rank}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <img className="m-auto" src={data.logo} />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailCoin;
