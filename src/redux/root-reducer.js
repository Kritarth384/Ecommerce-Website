// being actual code of states
// root-reducer represent overall reducer we have in reducer

import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});