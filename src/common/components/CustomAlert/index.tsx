import { ReactElement } from "react";
import info from "../../../static/images/info.svg";
import success from "../../../static/images/success.svg";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch } from "../redux/hooks";
import ModalContent from "./ModalContent";

type customAlertProps = {
  alertType: String;
};
const CustomAlert = ({ alertType }: customAlertProps) => {
  let template: ReactElement | null = null;
  const dispatch = useAppDispatch();

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
          actionLeft={() => dispatch(Alerts(""))}
          actionRight={() => dispatch(Alerts("transactiondeleted"))}
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
          actionLeft={() => dispatch(Alerts("transactionitem"))}
          actionRight={() => dispatch(Alerts("rejectreason"))}
        />
      );
      break;
    case "rejectreason":
      template = (
        <ModalContent
          type="alert"
          header="Reason"
          alertForm="feedback"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(Alerts("transactionrejected"));
          }}
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
          // confirmTransaction
          header="Accept Transaction"
          text="Are you sure you want to accept this new transaction"
          confirmBtn
          actionLeft={() => dispatch(Alerts("transactionitem"))}
          actionRight={() => dispatch(Alerts("transactionaccepted"))}
        />
      );
      break;

    case "canceltransaction":
      template = (
        <ModalContent
          type="alert"
          alertIcon={info}
          confirmBtn
          actionLeft={() => dispatch(Alerts(""))}
          actionRight={() => dispatch(Alerts("cancelreason"))}
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
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(Alerts("transactioncancelled"));
          }}
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
    case "transactionpayment":
      template = (
        <ModalContent type="alert" alertForm="payment" header="N500" />
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
          actionLeft={() => dispatch(Alerts("canceltransaction"))}
          actionRight={() => dispatch(Alerts("transactionaccepted"))}
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
        />
      );
      break;
    case "emojiform":
      template = <ModalContent type="alert" emojiForm />;
      break;

    case "deliveryfeedback":
      /* check this case */
      template = (
        <ModalContent
          type="alert"
          alertForm="feedback"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(Alerts("transactioncancelled"));
          }}
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
