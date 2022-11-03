import * as ActionTypes from "../ActionTypes";

interface DataType {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_active: boolean;
    type: string;
  }

const initialState = {
  data: [],
  dataDeleted: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
    //   console.log(action);
      return {
        ...state,
        data: action.payload,
      };

    case ActionTypes.DELETE_DATA_COIN:
      console.log(action.payload);
    //   const { id } = action.payload; 
    //   state.data = state.data.filter(item => item.id !== id)
      return {
        ...state,
        dataDeleted:action.payload,
      }
    default:
      return state;
  }
};

export default rootReducer;
