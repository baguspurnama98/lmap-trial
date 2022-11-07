import { combineReducers, PayloadAction } from "@reduxjs/toolkit";
import Coins from "./Coins";

const appReducer = combineReducers({
  // router: connectRouter(history),
  coins: Coins,
});
export type appReducerType = ReturnType<typeof appReducer>;

const rootReducer = (
  state: appReducerType | undefined,
  action: PayloadAction
) => {
  // if (action.type === USER_LOGOUT) {
  //   return appReducer(undefined, action);
  // }

  return appReducer(state, action);
};

export default rootReducer;