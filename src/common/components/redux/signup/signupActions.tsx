import { Dispatch } from "react";
import * as SignupTypes from "./signupTypes"

type iSignup = "biodata" | "verification" | "resend_verification" | "success"
export const Signup = (signupType: iSignup) => async (dispatch: Dispatch<{type: string, payload?: string}>) => {
    switch(signupType){
        case "biodata" : return dispatch({type: SignupTypes.SIGNUP_BIODATA});
        case "verification": return dispatch({type: SignupTypes.SIGNUP_VERIFICATION});
        case "resend_verification": return dispatch({type: SignupTypes.SIGNUP_RESEND_VERIFICATION});
        case "success": return dispatch({type: SignupTypes.SIGNUP_SUCCESS});
        default: return
    }
}