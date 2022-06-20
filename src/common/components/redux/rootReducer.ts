import { combineReducers } from "redux";
import alertReducer from "./alert/alertReducer"
import {  tableItemSlice } from "./tableItem";
export default combineReducers({
    alert: alertReducer,
    tableItem: tableItemSlice.reducer,
})