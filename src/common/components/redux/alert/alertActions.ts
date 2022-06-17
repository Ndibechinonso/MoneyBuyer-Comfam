import { Dispatch } from "react";
import * as AlertTypes from "./alertTypes"

export const Alerts = (alertType: string) => async(dispatch: Dispatch<{type: string, payload: string}>) => {
    switch(alertType){
        case "progress" : return  dispatch({type: AlertTypes.PROGRESS_MODAL, payload: "progress"});
        case "profileupdated" : return  dispatch({type: AlertTypes.PROFILEUPDATED_MODAL, payload: "profileupdated"});
        case "accountverified" : return  dispatch({type: AlertTypes.ACCOUNTVERIFIED_MODAL, payload: "accountverified"});
        case "verificationfailed" : return  dispatch({type: AlertTypes.VERIFICATIONFAILED_MODAL, payload: "verificationfailed"});
        case "confirmTransaction" : return  dispatch({type: AlertTypes.CONFIRM_TRANSACTION_MODAL, payload: "confirmTransaction"});
        case "cancelTransaction" : return  dispatch({type: AlertTypes.CANCEL_TRANSACTION_MODAL, payload: "cancelTransaction"});
        case "" : return  dispatch({type: AlertTypes.CLOSE_MODAL, payload: ""});
        default: return
    }
}

