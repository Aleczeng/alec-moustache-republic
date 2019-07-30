import {combineReducers} from "redux";
import cartReducer from "../pages/shoppingCart/store/cartReducer";

export default combineReducers({
    cart: cartReducer,
});


