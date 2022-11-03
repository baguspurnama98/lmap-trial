import * as ActionTypes from "../ActionTypes";
// import { Api } from "../../services/Api";
import axios from 'axios';

export const fetchListCoin = () => async (dispatch) => {
	dispatch({ type: ActionTypes.FETCH_START })
    const baseURL = "https://api.coinpaprika.com/v1/coins/";
	dispatch({ type: ActionTypes.FETCH_DATA_COIN })
	try {
		const request = await axios.get(baseURL)
		const response = await request.data
		dispatch({ type: ActionTypes.FETCH_SUCCESS, payload:response })
        // console.log(response)
		// return response
	} catch (error) {
		dispatch({ type: ActionTypes.FETCH_ERROR })
		console.log(error)
	}
}

// https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#rtk-query-overview

export const deteleData = (payload) => {
    // console.log(payload)
    return (dispatch) => dispatch({ type: ActionTypes.DELETE_DATA_COIN, payload: payload })
	
    // return{
    //     type: ActionTypes.DELETE_DATA_COIN, 
    //     payload: payload
    // }
}