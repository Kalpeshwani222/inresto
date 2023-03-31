import axios from "axios";

export const placeOrder = (tableno, subTotal) => async (dispatch, getState) => {
  const currentUser = getState().LoginUserReducer.userInfo;
  const cartItems = getState().cartReducer.cartItems;
  try {
    dispatch({ type: "PLACE_ORDER_REQUEST" });
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/order/neworder`,
      {
        currentUser,
        cartItems,
        subTotal,
        tableno,
      }
    );
    dispatch({ type: "PLACE_ORDER_SUCCESS", payload: res.data });
  } catch (error) {
    const message = error.response && error.response.data.error.message;
    dispatch({ type: "PLACE_ORDER_FAIL", payload: message });
  }
};

export const removeAllItemsFromCart = () => (dispatch) => {
  //remove all the ITEMS from localstorage
  localStorage.removeItem("cartItems");
  dispatch({ type: "REMOVE_ALL_ITEMS_FROM_CART" });
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().LoginUserReducer.userInfo;

  try {
    dispatch({ type: "USER_ORDER_REQUEST" });
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/order/getorders`,
      {
        userId: currentUser._id,
      }
    );

    dispatch({ type: "USER_ORDER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};

//admin order details
export const adminOrderDetails = (id) => async (dispatch, getState) => {
  try {
    const currentUser = getState().LoginUserReducer.userInfo;
    dispatch({ type: "ADMIN_ORDERD_DETAILS_REQUEST" });
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/admin//orders/${id}`
    );

    dispatch({ type: "ADMIN_ORDERD_DETAILS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "ADMIN_ORDERD_DETAILS_FAIL", payload: error });
  }
};
