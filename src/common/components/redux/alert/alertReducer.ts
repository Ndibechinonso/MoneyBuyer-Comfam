import { Reducer } from "redux";
import * as AlertTypes from "./alertTypes";
import { AppDispatchProps } from "../types";

interface AlertState {
    modal: boolean;
    modalType: String
}

const inititalState = {
    modal: false,
    modalType: ""
};

const reducer: Reducer<AlertState, AppDispatchProps> = (
    state = inititalState,
    action
) => {
    switch (action.type) {
        case AlertTypes.PROGRESS_MODAL:
            return { ...state, modal: true, modalType: "progress" };
        case AlertTypes.PROFILEUPDATED_MODAL: return {...state, modal: true, modalType: "profileupdated"};
        case AlertTypes.ACCOUNTVERIFIED_MODAL: return {...state, modal: true, modalType: "accountverified"};
        case AlertTypes.VERIFICATIONFAILED_MODAL: return {...state, modal: true, modalType: "verificationfailed"};
        case AlertTypes.CONFIRM_TRANSACTION_MODAL: return {...state, modal: true, modalType: "confirmTransaction"};
        case AlertTypes.CANCEL_TRANSACTION_MODAL: return {...state, modal: true, modalType: "cancelTransaction"};
        case AlertTypes.CLOSE_MODAL: return {...state, modal: false, modalType: ""}
        default:
            return state;
    }
};

export default reducer;
