import { Reducer } from "redux";
import * as AlertTypes from "./alertTypes";
import { AppDispatchProps } from "../types";

interface AlertState {
    modal: boolean;
    modalType: String;
    modalDirection: string;
    modalInitiator:string;
}

const inititalState = {
    modal: false,
    modalType: "",
    modalDirection:"",
    modalInitiator:"",
};

const reducer: Reducer<AlertState, AppDispatchProps> = (
    state = inititalState,
    {type, payload}
) => {
    switch (type) {
        case AlertTypes.PROGRESS_MODAL:
            return { ...state, modal: true, modalType: "progress" };
        case AlertTypes.PROFILEUPDATED_MODAL: return {...state, modal: true, modalType: "profileupdated"};
        case AlertTypes.ACCOUNTVERIFIED_MODAL: return {...state, modal: true, modalType: "accountverified"};
        case AlertTypes.VERIFICATIONFAILED_MODAL: return {...state, modal: true, modalType: "verificationfailed"};
        case AlertTypes.CONFIRM_TRANSACTION_MODAL: return {...state, modal: true, modalType: "confirmtransaction", modalDirection:"confirm"};
        case AlertTypes.CANCEL_TRANSACTION_MODAL: return {...state, modal: true, modalType: "canceltransaction", modalDirection:"cancel"};
        case AlertTypes.REASON_TRANSACTION_MODAL: return {...state, modal: true, modalType: "cancelreason"};
        case AlertTypes.TRANSACTION_ACCEPTED_MODAL: return {...state, modal: true, modalType: "transactionaccepted"};
        case AlertTypes.TRANSACTION_CANCELLED_MODAL: return {...state, modal:true, modalType:"transactioncancelled"}
        case AlertTypes.TRANSACTION_ITEM_MODAL: return {...state, modal: true, modalType: "transactionitem", modalInitiator: payload};
        case AlertTypes.CLOSE_MODAL: return inititalState
        default:
            return state;
    }
};

export default reducer;