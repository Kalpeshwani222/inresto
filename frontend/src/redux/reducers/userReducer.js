import { logout } from "../actions/userAction";
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

export const RegisterUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LoginUserReducer = (state = [], action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        userInfo: null,
      };

    case USER_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
