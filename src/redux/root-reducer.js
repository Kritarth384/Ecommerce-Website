// being actual code of states
// root-reducer represent overall reducer we have in reducer

import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
    // we only add cart to persist now 
    // can add more later...if want
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);