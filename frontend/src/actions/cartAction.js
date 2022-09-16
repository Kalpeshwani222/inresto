
export const addToCart = (menuItem,quantity) => (dispatch,getState)=>{
    var cartItems = {
        name : menuItem.name,
        _id : menuItem._id,
        image : menuItem.image,
        price: menuItem.price,
        quantity: quantity
    };

    dispatch({type: "ADD_TO_CART",payload: cartItems});

    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
}