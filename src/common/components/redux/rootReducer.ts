import { combineReducers } from "redux";
import alertReducer from "./alert/alertReducer"
import {  tableItemSlice } from "./tableItem";
import signupReducer from "./signup/signupReducer"

export default combineReducers({
    alert: alertReducer,
    tableItem: tableItemSlice.reducer,
    signup: signupReducer
})