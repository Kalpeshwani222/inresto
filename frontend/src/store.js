import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllItemsReducer} from "./redux/reducers/menuItemsReducer"
import {cartReducer} from "./redux/reducers/cartReducer";
import {RegisterUserReducer,LoginUserReducer} from './redux/reducers/userReducer';
import {placeOrderReducer,getUserOrderReducer} from "./redux/reducers/orderReducer"



//data is present then convert it to JSON form otherwise [].
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const rootReducer = combineReducers({
    getAllItemsReducer: getAllItemsReducer,
    cartReducer : cartReducer,
    RegisterUserReducer:RegisterUserReducer,
    LoginUserReducer:LoginUserReducer, 
    placeOrderReducer : placeOrderReducer,
    // getUserOrderReducer:getUserOrderReducer,
});



//if already the cart items is presents
const initialState = {
    cartReducer :{
        cartItems : cartItems,
    },
    LoginUserReducer :{
        userInfo : userInfo,
    }
}

const middleware = [thunk]

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;