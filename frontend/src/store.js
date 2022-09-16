import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllItemsReducer} from "./reducers/menuItemsReducer"
import {cartReducer} from "./reducers/cartReducer";

const rootReducer = combineReducers({
    getAllItemsReducer: getAllItemsReducer,
    cartReducer : cartReducer,
    
});

//data is present then convert it to JSON form otherwise [].
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

//if already the cart items is presents
const initialState = {
    cartReducer :{
        cartItems : cartItems
    }
}

const middleware = [thunk]

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;