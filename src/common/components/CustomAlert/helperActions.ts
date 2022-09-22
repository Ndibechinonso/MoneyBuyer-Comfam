import React from "react";
import admin from "../../../modules/service/admin";
import customToast from "../CustomToast";
import { Alerts } from "../redux/alert/alertActions";
import { iAlert } from "../redux/alert/types";
import { loadingInitiator, loadStart, loadStop } from "../redux/apploader";
import { store } from "../redux/store";

const start = (initiator: loadingInitiator) =>
  store.dispatch(loadStart(initiator));
const stop = () => store.dispatch(loadStop());

const transactionId = () => store.getState().tableItem.itm.id;

const alert = (type: iAlert) => store.dispatch(Alerts(type));

const errorHandler = (message: string) => {
  alert("");
  customToast(message, true);
};

// I am not sure what this is meant to be
export const getTransactionAmount = () => store.getState().tableItem.itm.price;

export const closeModal = () => store.dispatch(Alerts(""));

export const handleBackToTransactionModal = () =>
  store.dispatch(Alerts("transactionitem"));

export const handleDeleteTransaction = () => {
  const id = store.getState().alert.modalInitiator;
  start("changed_a_transaction");
  admin
    .deleteTransaction(id)
    .then((res) => alert("transactiondeleted"))
    .catch((err) => errorHandler(err.message))
    .finally(stop);
};

export const handleConfirmDelivery = () => {
  start("changed_a_transaction");
  admin
    .confirmDelivery(transactionId())
    .then((res) => alert("deliveryconfirmed"))
    .catch((err) => errorHandler(err.message))
    .finally(stop);
};

export const handleAcceptTransaction = () => {
  start("changed_a_transaction");
  admin
    .acceptTransaction(transactionId())
    .then((res) => alert("transactionaccepted"))
    .catch((err) => errorHandler(err.message))
    .finally(stop);
};

export const handleToRejectionForm = () => alert("rejectreason");

export const handleRejectTransaction = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const data = { transaction_id: transactionId(), reason: e.target[0].value };
  start("changed_a_transaction");
  admin
    .rejectTransaction(transactionId(), data)
    .then((res) => alert("transactionrejected"))
    .catch((err) => errorHandler(err.message))
    .finally(stop);
};

export const handleToCancelForm = () => alert("cancelreason");

export const handleCancelTransaction = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const transaction_id = store.getState().tableItem.itm.id;
  start("changed_a_transaction");
  admin
    .cancelTransaction({ transaction_id, reason: e.target[0].value })
    .then((res) => alert("transactioncancelled"))
    .catch((err) => errorHandler(err.message))
    .finally(stop);
};

export const handleStartDeliveryFeedbackFlow = () => alert("emojiform");

export const handleDeliveryFeedback = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const rating = store.getState().alert.modalInitiator;
  const transaction_id = store.getState().tableItem.itm.id;
  start("changed_a_transaction");
  admin
    .feedbackTransaction({
      rating,
      transaction_id,
      feedback: e.target[0].value,
    })
    .then((res) => alert("sentfeedback"))
    .catch((err) => errorHandler(err.message))
    .finally(stop);
};
