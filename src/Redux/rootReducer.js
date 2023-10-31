import { combineReducers } from "redux";
import ProductsReducer from "./Products/ProductsReducer";
import CartReducer from "./Cart/CartReducer";

const rootReducer = combineReducers({
    ProductsState:ProductsReducer,
    CartState:CartReducer
})


export default rootReducer;