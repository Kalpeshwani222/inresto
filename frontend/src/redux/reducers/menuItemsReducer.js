import {
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  GET_MENU_FAIL,
  CLEAR_ERRORS,
} from "./../constants/productConstants";

export const getAllItemsReducer = (state = { items: {}, }, action) => {
  switch (action.type) {
    case GET_MENU_REQUEST:
      return {
        loading: true,
        items: [],
      };

    case GET_MENU_SUCCESS:
      return {
        loading: false,
        items: action.payload,
      };

    case GET_MENU_FAIL:
      return {
        error: action.payload,
        loading: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
