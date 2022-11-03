import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import reducers from "../reducers";
import { useDispatch, } from 'react-redux'
const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: [
    "orderTransaction",
    "postTransaction",
    "postTransactionFilter",
    "routeConfig",
  ],
};

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, reducers),
});
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
