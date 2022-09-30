import React from "react";
import { Alerts } from "../redux/alert/alertActions";
import { iAlert } from "../redux/alert/types";
import { store } from "../redux/store";
import * as action from "../redux/transaction/transactionAsyncThunk";

const transactionId = () => store.getState().transactions.singleTransaction.id;

const alert = (type: iAlert) => store.dispatch(Alerts(type));

// I am not sure what this is meant to be
export const getTransactionAmount = () =>
  store.getState().transactions.singleTransaction.price.toString();

export const closeModal = () => alert("");

export const handleBackToTransactionModal = () => alert("transactionitem");

export const handleDeleteTransaction = () => {
  const id = store.getState().alert.modalInitiator;
  store.dispatch(action.deleteATransaction(id));
};

export const handleConfirmDelivery = () => {
  store.dispatch(action.confirmADelivery(transactionId()));
};

export const handleAcceptTransaction = () => {
  store.dispatch(action.acceptATransaction(transactionId()));
};

export const handleToRejectionForm = () => alert("rejectreason");

export const handleRejectTransaction = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const id = transactionId();
  const body = { transaction_id: id, reason: e.target[0].value };
  store.dispatch(action.rejectATransaction({ id, body }));
};

export const handleToCancelForm = () => alert("cancelreason");

export const handleCancelTransaction = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const data = { transaction_id: transactionId(), reason: e.target[0].value };
  store.dispatch(action.cancelATransaction(data));
};

export const handleStartDeliveryFeedbackFlow = () => alert("emojiform");

export const handleDeliveryFeedback = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const rating = store.getState().alert.modalInitiator;
  const data = {
    rating,
    transaction_id: transactionId(),
    feedback: e.target[0].value,
  };

  store.dispatch(action.transactionFeedback(data));
};
