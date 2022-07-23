import ModalContent from "./modalContent"
import { ReactElement } from "react";
import info from "../../../static/images/info.svg";
import success from "../../../static/images/success.svg";


type customAlertProps ={
    alertType : String; 
}
const CustomAlert = ({alertType}: customAlertProps) =>{

    let template: ReactElement | null = null;

    switch (alertType) {
        case "resetpassword": template = (<ModalContent  type="alert" alertIcon={success} header="Password Reset link sent" text="A password reset link has been succesfully sent to your email address" />)
        break;
        case "progress": template = ( <ModalContent type="alert" progress header="Please wait........" text="Your account is being verified" />)
        break;
            
        case "verificationfailed": template = (<ModalContent type="alert" alertIcon={info} header="Verification Failed!" text="Please ensure your details are correct" />)
        break;

        case "accountverified": template = (<ModalContent type="alert" alertIcon={success} header="Account Verified" text="You account have been verified successfully" />)
        break;

        case "profileupdated": template = (<ModalContent type="alert" alertIcon={success} header="Profile Updated" text="You profile have been updated successfully" />)
        break;

        case "transactionaccepted": template = (<ModalContent type="alert" alertIcon={success} singleAction header="Transaction Accepted" text="The buyer would be notified to make payment" />)
        break;

        case "transactioncancelled": template = (<ModalContent type="alert" alertIcon={success} singleAction header="Transaction Cancelled" text="Your transaction has been cancelled successfully" />)
        break;

        case "confirmtransaction": template = (<ModalContent type="alert" confirmTransaction  header="Accept Transaction" text="Are you sure you want to accept this new transaction" />)
        break;

        case "canceltransaction": template = (<ModalContent type="alert" alertIcon={info} cancelConfirmation header="Cancel Transaction" text="Are you sure you want to cancel this transaction" />)
        break;

        case "cancelreason": template = (<ModalContent type="alert" textArea header="Reason" text="Kindly state your reason for willing to cancel this transaction" />)
        break;

        case "transactionitem": template = (<ModalContent type="transactionitem" />)
        break;
        case "disputeitem": template = (<ModalContent type="disputeitem" />)
        break;
        case "newtransaction": template = (<ModalContent type="newtransaction" />)
        break;
        default:
            break;
    }
   
   return template
}

export default CustomAlert