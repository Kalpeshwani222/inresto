export const addToCart =
  (menuItem, variant, quantity) => (dispatch, getState) => {
    var cartItems = {
      name: menuItem.name,
      _id: menuItem._id,
      image: menuItem.image,
      variant: variant,
      quantity: Number(quantity),
      prices: menuItem.prices,
      price: menuItem.prices[0][variant] * quantity,
    };
    if (cartItems.quantity > 10) {
      alert("YOu can only add 10 items");
    } else {
      if (cartItems.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: menuItem });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItems });

        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cartReducer.cartItems)
        );
      }
    }
  };

export const deleteCart = (menuItem) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: menuItem });

  const cartItems = getState().cartReducer.cartitems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
