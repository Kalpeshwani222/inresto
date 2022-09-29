import axios from "axios";

export const placeOrder = (tableno,subTotal) => async(dispatch,getState) =>{

    dispatch({type:'PLACE_ORDER_REQUEST'});
     const currentUser = getState().LoginUserReducer.userInfo;
    const cartItems = getState().cartReducer.cartItems;

    try {
        // const res = await axios.post('/api/order/placeorder' ,{
        //     tableno,subTotal,currentUser,cartItems
        // });

        dispatch({type:'PLACE_ORDER_SUCCESS'});
        // console.log(res);
        console.log(cartItems , subTotal);
        console.log(tableno);
        console.log(currentUser);

        //remove all the ITEMS from localstorage
        localStorage.removeItem("cartItems");
    } catch (error) {
        dispatch({type:'PLACE_ORDER_FAIL'});
        console.log(error);
    }
};

