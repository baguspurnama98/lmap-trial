import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createSlice } from "@reduxjs/toolkit";

export interface ICoin {
  id?: string;
  name?: string;
  symbol?: string;
  rank?: number;
  is_new?: string;
  is_active?: boolean;
  type?: string;
}

export const coinsApi = createApi({
  reducerPath: "coins",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coinpaprika.com/v1/",
  }),
  tagTypes: ["Coins"],
  endpoints: (builder) => ({
    // ? Query: Get All Products
    getCoins: builder.query<ICoin[], void >({
      query: () => `coins`,
      // transformResponse: (response: { data: { coins: ICoin } }) => {
      //   return response.data.coins;
      // },
    }),
    getDetail: builder.query<any, any >({
      query: (id) => `coins/${id}`,
    })
  }),
});

type FilteredCarsProps = {
  id: string,
  name: string,
  address: string
}


export interface IDeleted {
  haveToDetele: string
  dataDeleted: Array<FilteredCarsProps>
  }


const initialState:IDeleted = {
  haveToDetele: '',
  dataDeleted: [],
};

export const coinsSlice = createSlice({
  name: "coinsSlice",
  initialState,
  reducers: {
    deleteCoin: (state, action) => {
      
      // const temp = state.dataDeleted.push(action.payload);

      return {
        ...state,
        haveToDetele: action.payload,
        // dataDeleted: temp
      };
    },
    // coinsApi
  }
});

// export const allPosts = (state) => state.posts || [];
export const { deleteCoin } = coinsSlice.actions;
export default coinsSlice.reducer;

export const { useGetCoinsQuery, useGetDetailQuery } = coinsApi
