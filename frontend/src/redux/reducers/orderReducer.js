export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        loading: true,
      };

    case "PLACE_ORDER_SUCCESS":
      return {
        loading: false,
        success: action.payload,
      };

    case "PLACE_ORDER_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getUserOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "USER_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "USER_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
        orders: action.payload,
      };

    case "USER_ORDER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//admin order details
export const getAdminOrderReducer = (state = { orderDetail: [] }, action) => {
  switch (action.type) {
    case "ADMIN_ORDERD_DETAILS_REQUEST":
      return {
        loading: true,
      };
    case "ADMIN_ORDERD_DETAILS_SUCCESS":
      return {
        loading: false,
        // success: true,
        orderDetail: action.payload,
      };

    case "ADMIN_ORDERD_DETAILS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
