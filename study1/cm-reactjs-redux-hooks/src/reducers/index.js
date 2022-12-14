import { combineReducers } from "redux";
import appReducer from "./app.reducer";
import box1Reducer from "./box1.reducer";
export default combineReducers({appReducer, box1Reducer})