import axios from "axios";
import {
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  GET_MENU_FAIL,
  CLEAR_ERRORS,
  LOAD_MORE_ITEMS_FAIL,
  LOAD_MORE_ITEMS_REQUEST,
  LOAD_MORE_ITEMS_SUCCESS,
} from "./../constants/productConstants";

export const getAllMenuItems =
  (page, sort, sortOrder, filterCategory, search) => async (dispatch) => {
    try {
      dispatch({ type: GET_MENU_REQUEST });
      const url = `${process.env.REACT_APP_SERVER_URL}/api/menu?page=${page}&sort=${sort},${sortOrder}&category=${filterCategory}&search=${search}`;
      const res = await axios.get(url);
      // console.log(res);
      dispatch({ type: GET_MENU_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_MENU_FAIL, payload: error });
    }
  };

// load more
export const loadMoreMenuItems =
  (page, sort, sortOrder, filterCategory, search) => async (dispatch) => {
    try {
      // console.log(page);
      dispatch({ type: LOAD_MORE_ITEMS_REQUEST });
      const url = `${process.env.REACT_APP_SERVER_URL}/api/menu?page=${page}&sort=${sort},${sortOrder}&category=${filterCategory}&search=${search}`;
      const res = await axios.get(url);
      // console.log(res);
      dispatch({ type: LOAD_MORE_ITEMS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: LOAD_MORE_ITEMS_FAIL, payload: error });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
