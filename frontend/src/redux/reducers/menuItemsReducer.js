import {
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  GET_MENU_FAIL,
  CLEAR_ERRORS,
  LOAD_MORE_ITEMS_FAIL,
  LOAD_MORE_ITEMS_REQUEST,
  LOAD_MORE_ITEMS_SUCCESS,
} from "./../constants/productConstants";

export const getAllItemsReducer = (
  state = { items: { total: 0, page: 1, limit: 6, item: [] } },
  action
) => {
  switch (action.type) {
    case GET_MENU_REQUEST:
      return {
        loading: true,
        items: [],
      };

    case GET_MENU_SUCCESS:
      return {
        loading: false,
        items: {
          total: action.payload.total,
          page: action.payload.page,
          limit: action.payload.limit,
          item: action.payload.items,
        },
      };

    case GET_MENU_FAIL:
      return {
        error: action.payload,
        loading: false,
      };

    case LOAD_MORE_ITEMS_REQUEST:
      return {
        ...state,
        loadingMore: true,
      };

    case LOAD_MORE_ITEMS_SUCCESS:
      return {
        loadingMore: false,
        items: {
          page: action.payload.page,
          total: action.payload.total,
          item: [...state.items.item,...action.payload.items],
        },
      };

    case LOAD_MORE_ITEMS_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingMore: false,
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
