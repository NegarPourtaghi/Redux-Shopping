import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './rootReducer'
import {composeWithDevTools} from "redux-devtools-extension"
const Store=createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)))


export default Store;