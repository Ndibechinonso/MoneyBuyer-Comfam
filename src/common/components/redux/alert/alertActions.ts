import { Dispatch } from "react";
import * as AlertTypes from "./alertTypes";
import { iAlert } from "./types";

type modalInitiator = string;
// type modalInitiator =
//   | undefined
//   | "pendingconfirmation"
//   | "awaitingconfirmation"
//   | "pendingdelivery";

export const Alerts =
  (alertType: iAlert, initiator?: modalInitiator) =>
  async (dispatch: Dispatch<{ type: string; payload?: string }>) => {
    switch (alertType) {
      case "progress":
        return dispatch({ type: AlertTypes.PROGRESS_MODAL });
      case "processing":
        return dispatch({ type: AlertTypes.PROCESSING_MODAL });
      case "resetpassword":
        return dispatch({ type: AlertTypes.RESETPASSWORD_MODAL });
      case "verificationfailed":
        return dispatch({ type: AlertTypes.VERIFICATIONFAILED_MODAL });
      case "accountverified":
        return dispatch({ type: AlertTypes.ACCOUNTVERIFIED_MODAL });
      case "profileupdated":
        return dispatch({ type: AlertTypes.PROFILEUPDATED_MODAL });
      case "notificationupdated":
        return dispatch({ type: AlertTypes.NOTIFICATIONUPDATED_MODAL });
      case "deletetransaction":
        return dispatch({
          type: AlertTypes.DELETE_TRANSACTION_MODAL,
          payload: initiator,
        });
      case "transactiondeleted":
        return dispatch({ type: AlertTypes.TRANSACTION_DELETED_MODAL });
      case "rejecttransaction":
        return dispatch({ type: AlertTypes.REJECT_TRANSACTION_MODAL });
      case "rejectreason":
        return dispatch({ type: AlertTypes.REJECT_TRANSACTION_REASON_MODAL });
      case "transactionrejected":
        return dispatch({ type: AlertTypes.TRANSACTION_REJECTED_MODAL });
      case "transactionaccepted":
        return dispatch({ type: AlertTypes.TRANSACTION_ACCEPTED_MODAL });
      case "transactioncancelled":
        return dispatch({ type: AlertTypes.TRANSACTION_CANCELLED_MODAL });
      case "confirmtransaction":
        return dispatch({ type: AlertTypes.CONFIRM_TRANSACTION_MODAL });
      case "canceltransaction":
        return dispatch({ type: AlertTypes.CANCEL_TRANSACTION_MODAL });
      case "cancelreason":
        return dispatch({ type: AlertTypes.CANCEL_TRANSACTION_REASON_MODAL });
      case "newtransactioncreated":
        return dispatch({ type: AlertTypes.NEW_TRANSACTION_CREATED_MODAL });
      case "transactionpayment":
        return dispatch({ type: AlertTypes.TRANSACTION_PAYMENT_MODAL });
      case "successfulltransaction":
        return dispatch({ type: AlertTypes.SUCCESS_TRANSACTION_PAYMENT_MODAL });
      case "unsuccessfulltransaction":
        return dispatch({ type: AlertTypes.FAIL_TRANSACTION_PAYMENT_MODAL });
      case "confirmdelivery":
        return dispatch({ type: AlertTypes.CONFIRM_DELIVERY_MODAL });
      case "deliveryconfirmed":
        return dispatch({ type: AlertTypes.DELIVERY_CONFIRMED_MODAL });
      case "emojiform":
        return dispatch({ type: AlertTypes.EMOJI_FORM_MODAL });
      case "deliveryfeedback":
        return dispatch({
          type: AlertTypes.DELIVERY_FEEDBACK_MODAL,
          payload: initiator,
        });
      case "sentfeedback":
        return dispatch({ type: AlertTypes.FEEDBACKSENT_MODAL });
      case "disputeform":
        return dispatch({ type: AlertTypes.DISPUTE_FORM_MODAL });
      case "disputesubmitted":
        return dispatch({ type: AlertTypes.DISPUTE_SUBMITTED_MODAL });
      case "despositsuccessful":
        return dispatch({ type: AlertTypes.DEPOSIT_SUCCESSFUL });
      case "withdrawalsuccessful":
        return dispatch({ type: AlertTypes.WITHDRAWAL_SUCCESSFUL });
      case "transactionitem":
        return dispatch({
          type: AlertTypes.TRANSACTION_ITEM_MODAL,
          payload: initiator,
        });
      case "disputeitem":
        return dispatch({
          type: AlertTypes.DISPUTE_ITEM_MODAL,
          payload: initiator,
        });
      case "newtransaction":
        return dispatch({ type: AlertTypes.NEW_TRANSACTION_MODAL });
      case "":
        return dispatch({ type: AlertTypes.CLOSE_MODAL });
      default:
        return;
    }
  };
