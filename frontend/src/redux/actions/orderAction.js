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


export const removeAllItemsFromCart = () =>(dispatch) => {
   //remove all the ITEMS from localstorage
    localStorage.removeItem("cartItems");
  dispatch({ type: "REMOVE_ALL_ITEMS_FROM_CART" });
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().LoginUserReducer.userInfo;

  dispatch({ type: "USER_ORDER_REQUEST" });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/order/getorders`,
      {
        userId: currentUser._id,
      }
    );

    dispatch({ type: "USER_ORDER_SUCCESS", payload: res.data });
  } catch (error) {
    // console.log(error);
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};
