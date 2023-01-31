import axios from "axios";
import {
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  GET_MENU_FAIL,
  CLEAR_ERRORS,
} from "./../constants/productConstants";

export const getAllMenuItems =
  (page, sort, sortOrder, filterCategory, search) => async (dispatch) => {
    try {
      dispatch({ type: GET_MENU_REQUEST });
      const url = `${process.env.REACT_APP_SERVER_URL}/api/menu?page=${page}&sort=${sort},${sortOrder}&category=${filterCategory}&search=${search}`;

      const res = await axios.get(url);
      dispatch({ type: GET_MENU_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_MENU_FAIL, payload: error });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
