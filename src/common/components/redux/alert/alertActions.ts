import { Dispatch } from "react";
import * as AlertTypes from "./alertTypes"

type iAlert = "progress"| "profileupdated" | "accountverified" | "verificationfailed" | "confirmtransaction"|"canceltransaction" | "transactionitem"| "transactionaccepted" | "transactioncancelled" | "cancelreason" | "newtransaction" | "";
type modalInitiator = undefined | "pendingconfirmation" | "awaitingconfirmation" | "pendingdelivery"


export const Alerts = (alertType: iAlert, initiator?:modalInitiator) => async(dispatch: Dispatch<{type: string, payload?: string}>) => {
    switch(alertType){
        case "progress" : return  dispatch({type: AlertTypes.PROGRESS_MODAL,});
        case "profileupdated" : return  dispatch({type: AlertTypes.PROFILEUPDATED_MODAL,});
        case "accountverified" : return  dispatch({type: AlertTypes.ACCOUNTVERIFIED_MODAL,});
        case "verificationfailed" : return  dispatch({type: AlertTypes.VERIFICATIONFAILED_MODAL,});
        case "confirmtransaction" : return  dispatch({type: AlertTypes.CONFIRM_TRANSACTION_MODAL, });
        case "canceltransaction" : return  dispatch({type: AlertTypes.CANCEL_TRANSACTION_MODAL, });
        case "cancelreason" : return  dispatch({type: AlertTypes.REASON_TRANSACTION_MODAL, });
        case "transactionaccepted" : return  dispatch({type: AlertTypes.TRANSACTION_ACCEPTED_MODAL, });
        case "transactioncancelled" : return  dispatch({type: AlertTypes.TRANSACTION_CANCELLED_MODAL, });
        case "transactionitem" : return  dispatch({type: AlertTypes.TRANSACTION_ITEM_MODAL, payload: initiator});
        case "newtransaction" : return  dispatch({type: AlertTypes.NEW_TRANSACTION_MODAL, });
        case "" : return  dispatch({type: AlertTypes.CLOSE_MODAL});
        default: return
    }
}

