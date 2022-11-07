import * as ActionTypes from "../ActionTypes";

const initialState = {
  data: [],
  dataDeleted: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case ActionTypes.DELETE_DATA_COIN:
      console.log(action.payload);

      // const data = state.data.filter((item) => item["id"] !== action.payload);
      return {
        ...state,
        // data2: data,
        // dataDeleted: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
