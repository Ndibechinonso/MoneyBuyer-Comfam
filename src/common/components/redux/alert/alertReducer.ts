import { Reducer } from "redux";
import * as AlertTypes from "./alertTypes";
import { AppDispatchProps } from "../types";

interface AlertState {
  modal: boolean;
  modalType: string;
  modalDirection: string;
  modalInitiator: string;
}

const initialState = {
  modal: false,
  modalType: "",
  modalDirection: "",
  modalInitiator: "",
};

const reducer: Reducer<AlertState, AppDispatchProps> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case AlertTypes.PROGRESS_MODAL:
      return { ...state, modal: true, modalType: "progress" };
      case AlertTypes.PROCESSING_MODAL:
        return { ...state, modal: true, modalType: "processing" };
    case AlertTypes.RESETPASSWORD_MODAL:
      return { ...state, modal: true, modalType: "resetpassword" };
    case AlertTypes.VERIFICATIONFAILED_MODAL:
      return { ...state, modal: true, modalType: "verificationfailed" };
    case AlertTypes.ACCOUNTVERIFIED_MODAL:
      return { ...state, modal: true, modalType: "accountverified" };
    case AlertTypes.PROFILEUPDATED_MODAL:
      return { ...state, modal: true, modalType: "profileupdated" };
    case AlertTypes.NOTIFICATIONUPDATED_MODAL:
      return { ...state, modal: true, modalType: "notificationupdated" };
    case AlertTypes.DELETE_TRANSACTION_MODAL:
      return {
        ...state,
        modal: true,
        modalType: "deletetransaction",
        modalInitiator: payload,
      };
    case AlertTypes.TRANSACTION_DELETED_MODAL:
      return { ...state, modal: true, modalType: "transactiondeleted" };
    case AlertTypes.REJECT_TRANSACTION_MODAL:
      return { ...state, modal: true, modalType: "rejecttransaction" };
    case AlertTypes.REJECT_TRANSACTION_REASON_MODAL:
      return { ...state, modal: true, modalType: "rejectreason" };
    case AlertTypes.TRANSACTION_REJECTED_MODAL:
      return { ...state, modal: true, modalType: "transactionrejected" };
    case AlertTypes.TRANSACTION_ACCEPTED_MODAL:
      return { ...state, modal: true, modalType: "transactionaccepted" };
    case AlertTypes.TRANSACTION_CANCELLED_MODAL:
      return { ...state, modal: true, modalType: "transactioncancelled" };
    case AlertTypes.CONFIRM_TRANSACTION_MODAL:
      return {
        ...state,
        modal: true,
        modalType: "confirmtransaction",
        modalDirection: "confirm",
      };
    case AlertTypes.CANCEL_TRANSACTION_MODAL:
      return {
        ...state,
        modal: true,
        modalType: "canceltransaction",
        modalDirection: "cancel",
      };
    case AlertTypes.CANCEL_TRANSACTION_REASON_MODAL:
      return { ...state, modal: true, modalType: "cancelreason" };
    case AlertTypes.NEW_TRANSACTION_CREATED_MODAL:
      return { ...state, modal: true, modalType: "newtransactioncreated" };
    case AlertTypes.TRANSACTION_PAYMENT_MODAL:
      return { ...state, modal: true, modalType: "transactionpayment" };
    case AlertTypes.SUCCESS_TRANSACTION_PAYMENT_MODAL:
      return { ...state, modal: true, modalType: "successfulltransaction" };
    case AlertTypes.FAIL_TRANSACTION_PAYMENT_MODAL:
      return { ...state, modal: true, modalType: "unsuccessfulltransaction" };
    case AlertTypes.CONFIRM_DELIVERY_MODAL:
      return { ...state, modal: true, modalType: "confirmdelivery" };
    case AlertTypes.DELIVERY_CONFIRMED_MODAL:
      return { ...state, modal: true, modalType: "deliveryconfirmed" };
    case AlertTypes.EMOJI_FORM_MODAL:
      return { ...state, modal: true, modalType: "emojiform" };
    case AlertTypes.DELIVERY_FEEDBACK_MODAL:
      return {
        ...state,
        modal: true,
        modalType: "deliveryfeedback",
        modalInitiator: payload,
      };
    case AlertTypes.FEEDBACKSENT_MODAL:
      return { ...state, modal: true, modalType: "sentfeedback" };
    case AlertTypes.DISPUTE_SUBMITTED_MODAL:
      return { ...state, modal: true, modalType: "disputesubmitted" };
    case AlertTypes.DEPOSIT_SUCCESSFUL:
      return { ...state, modal: true, modalType: "despositsuccessful" };
    case AlertTypes.WITHDRAWAL_SUCCESSFUL:
      return { ...state, modal: true, modalType: "withdrawalsuccessful" };
    case AlertTypes.DISPUTE_FORM_MODAL:
      return { ...state, modal: true, modalType: "disputeform" };
    case AlertTypes.TRANSACTION_ITEM_MODAL:
      return {
        ...state,
        modal: true,
        modalType: "transactionitem",
        modalInitiator: payload,
      };
    case AlertTypes.DISPUTE_ITEM_MODAL:
      return {
        ...state,
        modal: true,
        modalType: "disputeitem",
        modalInitiator: payload,
      };
    case AlertTypes.NEW_TRANSACTION_MODAL:
      return { ...state, modal: true, modalType: "newtransaction" };
    case AlertTypes.CLOSE_MODAL:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
