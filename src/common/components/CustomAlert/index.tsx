import { ReactElement } from "react";
import info from "../../../static/images/info.svg";
import success from "../../../static/images/success.svg";
import * as helpers from "./helperActions";
import ModalContent from "./ModalContent";
import { customAlertProps } from "./types";

const CustomAlert = ({ alertType }: customAlertProps) => {
  let template: ReactElement | null = null;

  switch (alertType) {
    case "progress":
      template = (
        <ModalContent
          type="alert"
          progress
          header="Please wait........"
          text="Your account is being verified"
        />
      );
      break;
    case "resetpassword":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Password Reset link sent"
          text="A password reset link has been succesfully sent to your email address"
          finishBtn
        />
      );
      break;

    case "verificationfailed":
      template = (
        <ModalContent
          type="alert"
          alertIcon={info}
          header="Verification Failed!"
          text="Please ensure your details are correct"
          finishBtn
        />
      );
      break;

    case "accountverified":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Account Verified"
          text="Your account have been verified successfully"
          finishBtn
        />
      );
      break;

    case "profileupdated":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Profile Updated"
          text="Your profile have been updated successfully"
          finishBtn
        />
      );
      break;

    case "notificationupdated":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Notification Settings Updated"
          text="Your notification settings have been updated successfully"
          finishBtn
        />
      );
      break;

    case "deletetransaction":
      template = (
        <ModalContent
          type="alert"
          alertIcon={info}
          header="Delete Transaction"
          text="Are you sure you want to delete this transaction"
          confirmBtn
          actionLeft={helpers.closeModal}
          actionRight={helpers.handleDeleteTransaction}
        />
      );
      break;
    case "transactiondeleted":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Transaction Deleted"
          text="Your transaction has been deleted successfully"
          finishBtn
        />
      );
      break;

    case "rejecttransaction":
      template = (
        <ModalContent
          type="alert"
          alertIcon={info}
          header="Reject Transaction"
          text="Are you sure you want to reject this new transaction"
          confirmBtn
          actionLeft={helpers.handleBackToTransactionModal}
          actionRight={helpers.handleToRejectionForm}
        />
      );
      break;
    case "rejectreason":
      template = (
        <ModalContent
          type="alert"
          header="Reason"
          alertForm="feedback"
          onSubmit={helpers.handleRejectTransaction}
          text="Kindly state your reason for rejecting this transaction"
        />
      );
      break;
    case "transactionrejected":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Transaction Rejected"
          text="You have succesfully rejected this transaction."
          finishBtn
        />
      );
      break;

    case "transactionaccepted":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Transaction Accepted"
          text="The buyer would be notified to make payment"
          finishBtn
        />
      );
      break;

    case "transactioncancelled":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          finishBtn
          header="Transaction Cancelled"
          text="Your transaction has been cancelled successfully"
        />
      );
      break;

    case "confirmtransaction":
      template = (
        <ModalContent
          type="alert"
          header="Accept Transaction"
          text="Are you sure you want to accept this new transaction"
          confirmBtn
          actionLeft={helpers.handleBackToTransactionModal}
          actionRight={helpers.handleAcceptTransaction}
        />
      );
      break;

    case "canceltransaction":
      template = (
        <ModalContent
          type="alert"
          alertIcon={info}
          confirmBtn
          actionLeft={helpers.closeModal}
          actionRight={helpers.handleToCancelForm}
          header="Cancel Transaction"
          text="Are you sure you want to cancel this transaction"
        />
      );
      break;

    case "cancelreason":
      template = (
        <ModalContent
          type="alert"
          alertForm="feedback"
          onSubmit={helpers.handleCancelTransaction}
          header="Reason"
          text="Kindly state your reason for willing to cancel this transaction"
        />
      );
      break;
    case "newtransactioncreated":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          finishBtn
          header="Transaction created successfully!"
          text="Your transaction has been created and seller will be notified"
        />
      );
      break;

    case "transactionpayment":
      template = (
        <ModalContent
          type="alert"
          alertForm="payment"
          header={helpers.getTransactionAmount()}
        />
      );
      break;
    case "successfulltransaction":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Payment Successful"
          text="Your payment has been approved."
          finishBtn
        />
      );
      break;
    case "unsuccessfulltransaction":
      template = (
        <ModalContent
          type="alert"
          alertIcon={info}
          header="Payment Unsuccessful"
          text="Something went wrong."
          finishBtn
        />
      );
      break;
    case "confirmdelivery":
      template = (
        <ModalContent
          type="alert"
          header="Confirm Delivery"
          text="Do you confirm this delivery meets product/service requirements?"
          confirmBtn
          actionLeft={helpers.handleBackToTransactionModal}
          actionRight={helpers.handleConfirmDelivery}
        />
      );
      break;
    case "deliveryconfirmed":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Delivery Confirmed"
          text="Your delivery has been confirmed, seller would will be notified and credited."
          finishBtn
          actionLeft={helpers.handleStartDeliveryFeedbackFlow}
        />
      );
      break;
    case "emojiform":
      template = (
        <ModalContent
          type="alert"
          alertForm="rating"
          header="How was the delivery?"
        />
      );
      break;

    case "deliveryfeedback":
      template = (
        <ModalContent
          type="alert"
          alertForm="feedback"
          onSubmit={helpers.handleDeliveryFeedback}
          opt
          header="Write your Feedback"
          text="Tell us what went wrong"
        />
      );
      break;
    case "sentfeedback":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Feedback Sent!"
          text="Thank you for your feedback"
          finishBtn
        />
      );
      break;
    case "disputeform":
      template = <ModalContent type="disputeform" />;
      break;
    case "disputesubmitted":
      template = (
        <ModalContent
          type="alert"
          alertIcon={success}
          header="Dispute Submitted"
          text="Your dispute has been submitted successfully this would take 48 hours"
          finishBtn
        />
      );
      break;

    case "transactionitem":
      template = <ModalContent type="transactionitem" />;
      break;
    case "disputeitem":
      template = <ModalContent type="disputeitem" />;
      break;
    case "newtransaction":
      template = <ModalContent type="newtransaction" />;
      break;
    default:
      break;
  }

  return template;
};

export default CustomAlert;
