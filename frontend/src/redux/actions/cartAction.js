export const addToCart = (menuItem, quantity) => (dispatch, getState) => {
  var cartItems = {
    name: menuItem.name,
    _id: menuItem._id,
    image: menuItem.image,
    quantity: Number(quantity),
    price: menuItem.price,
  };

  if (cartItems.quantity > 10) {
    alert("YOu can only add 10 items");
  } else {
    dispatch({ type: "ADD_TO_CART", payload: cartItems });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cartReducer.cartItems)
    );
  }
};

//delete item
export const deleteCart = (id) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: id });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

//remove single item
export const removeSingleItem =
  (menuItem, quantity) => (dispatch, getState) => {
    var cartItems = {
      name: menuItem.name,
      _id: menuItem._id,
      image: menuItem.image,
      quantity: Number(quantity),
      price: menuItem.price,
    };

    dispatch({ type: "REMOVE_SINGLE_ITEM", payload: cartItems });

    const items = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(items));
  };
