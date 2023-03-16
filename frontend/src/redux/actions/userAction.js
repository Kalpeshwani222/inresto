import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
} from "../constants/userConstants";

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      Headers: {
        "Content-type": "applications/json",
      },
    };

    const { res } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/user/register`,
      { name, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: res });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.error.message
          : error.response.data.error.message,
    });
  }
};

export const logout = () => async (dispatch, getState) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: "USER_LOGOUT_SUCCESS" });
  // try {
  //   const userDetails = getState().LoginUserReducer.userInfo;

  //   await axios.post(
  //     `${process.env.REACT_APP_SERVER_URL}/api/auth/user/logout`,
  //     {
  //       table_no: userDetails.tableNo,
  //     }
  //   );
  //   localStorage.removeItem("userInfo");
  //   dispatch({ type: USER_LOGOUT_SUCCESS });
  // } catch (error) {
  //   dispatch({ type: USER_LOGOUT_FAIL });
  
  // }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      Headers: {
        "Content-type": "applications/json",
      },
    };

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/user/login`,
      {
        email,
        password,
      },
      config
    );
    var data = res.data;

    //add the one new field in localstorage
    Object.assign(data, { tableNo: "" });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
    if (data.role === "admin") {
      window.location.href = "/#/dashboard";
    } else {
      window.location.href = "/#/home";
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.error.message
          : error.response.data.error.message,
    });
  }
};
