import axios from "axios";
import {
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  GET_MENU_FAIL,
  CLEAR_ERRORS,
  LOAD_MORE_ITEMS_FAIL,
  LOAD_MORE_ITEMS_REQUEST,
  LOAD_MORE_ITEMS_SUCCESS,
  ADD_MENU_ITEMS_REQUEST,
  ADD_MENU_ITEMS_SUCCESS,
  ADD_MENU_ITEMS_FAIL,
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

// load more
export const loadMoreMenuItems =
  (page, sort, sortOrder, filterCategory, search) => async (dispatch) => {
    try {
      dispatch({ type: LOAD_MORE_ITEMS_REQUEST });
      const url = `${process.env.REACT_APP_SERVER_URL}/api/menu?page=${page}&sort=${sort},${sortOrder}&category=${filterCategory}&search=${search}`;
      const res = await axios.get(url);
      dispatch({ type: LOAD_MORE_ITEMS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: LOAD_MORE_ITEMS_FAIL, payload: error });
    }
  };

//ADMIN => add the MENU ITEM
export const addMenuItem =
  (name, image, price, desc, category, typeProd) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ADD_MENU_ITEMS_REQUEST,
      });

      const {
        LoginUserReducer: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/menu`,
        { name, image, price, desc, category, typeProd },
        config
      );

      dispatch({
        type: ADD_MENU_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.error.message
          : error.response.data.error.message;

      dispatch({
        type: ADD_MENU_ITEMS_FAIL,
        payload: message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
