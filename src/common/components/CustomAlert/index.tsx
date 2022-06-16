import AlertModal from "../AlertModal"
import { ReactElement } from "react";
import info from "../../../static/images/info.svg";
import success from "../../../static/images/success.svg";


type customAlertProps ={
    alertType : String; 
}
const CustomAlert = ({alertType}: customAlertProps) =>{

    let template: ReactElement | null = null;

    switch (alertType) {
        case "progress": template = ( <AlertModal type="alert" progress header="Please wait........" text="Your account is being verified" />)
            
            break;
    case "verificationfailed": template = (<AlertModal type="alert" alertIcon={info} header="Verification Failed!" text="Please ensure your details are correct" />)
    break;

    case "accountverified": template = (<AlertModal type="alert" alertIcon={success} header="Account Verified" text="You account have been verified successfully" />)
    break;

    case "profileupdated": template = (<AlertModal type="alert" alertIcon={success} header="Profile Updated" text="You profile have been updated successfully" />)
    break;

    case "confirmTransaction": template = (<AlertModal type="alert" confirmTransaction  header="Accept Transaction" text="Are you sure you want to accept this new transaction" />)
    break;

    case "cancelTransaction": template = (<AlertModal type="alert" cancelTransaction header="Cancel Transaction" text="Are you sure you want to cancel this transaction" />)
    break;
        default:
            break;
    }
   
   return template
}

export default CustomAlert