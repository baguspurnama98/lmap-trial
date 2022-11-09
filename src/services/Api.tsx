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
    getCoins: builder.query<ICoin[], void>({
      query: () => `coins`,
    }),

    getDetail: builder.query<any, any>({
      query: (id) => `coins/${id}`,
    }),
  }),
});
// ----------------------------------------
type Data = {
  id?: string;
  name?: string;
  symbol?: string;
  rank?: number;
  is_new?: string;
  is_active?: boolean;
  type?: string;
};

export interface DataCoin {
  data2: Array<Data>;
  // dataDeleted: Array<FilteredCarsProps>
  selectedToDelete: string;
}

const initialState: DataCoin = {
  data2: [],
  selectedToDelete: "",
};

export const coinsSlice = createSlice({
  name: "coinsSlice",
  initialState,
  reducers: {
    addCoin: (state, action) => {
      return {
        ...state,
        data2: action.payload,
      };
    },
    deleteCoin: (state, action) => {
      const temp = state.data2.filter((item) => item["id"] !== action.payload);
      // const temp = state.data.push(action.payload);
      return {
        ...state,
        data2: temp,
        selectedToDelete: action.payload,
      };
    },
  },
});

export const { addCoin, deleteCoin } = coinsSlice.actions;
export default coinsSlice.reducer;

export const {
  useGetCoinsQuery,
  useGetDetailQuery,
  // , useDeleteCoinMutation
} = coinsApi;
