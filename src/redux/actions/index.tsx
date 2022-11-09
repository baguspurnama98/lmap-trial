import * as ActionTypes from "../ActionTypes";

// https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#rtk-query-overview

export const deteleData = (payload) => {
  console.log(payload)
  return (dispatch) =>
    dispatch({ type: ActionTypes.DELETE_DATA_COIN, payload: payload });
};
