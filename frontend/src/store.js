import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllItemsReducer,addMenuItemReducer} from "./redux/reducers/menuItemsReducer"
import {cartReducer} from "./redux/reducers/cartReducer";
import {RegisterUserReducer,LoginUserReducer} from './redux/reducers/userReducer';
import {placeOrderReducer,getUserOrderReducer, getAdminOrderReducer} from "./redux/reducers/orderReducer"
import { userNotificationsReducer} from "./redux/reducers/userNotifiReducer";


//data is present then convert it to JSON form otherwise [].
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const rootReducer = combineReducers({
    getAllItemsReducer: getAllItemsReducer,
    cartReducer : cartReducer,
    RegisterUserReducer:RegisterUserReducer,
    LoginUserReducer:LoginUserReducer, 
    createOrder : placeOrderReducer,
    userOrders:getUserOrderReducer,
    userNotifications : userNotificationsReducer,
    addMenu : addMenuItemReducer,
    adminOrderDetails : getAdminOrderReducer
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