import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import { coinsApi, coinsSlice } from '../../services/Api';
import { useDispatch } from 'react-redux'
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"
// import reducers from "../reducers";

export const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    selected: coinsSlice.reducer
    // root: combineReducers({[coinsApi.reducerPath]: coinsApi.reducer, selected: coinsSlice.reducer})
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({}).concat([coinsApi.middleware]), 
});

// setupListeners(store.dispatch); // untuk mengaktifkan onfocus, dll
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch