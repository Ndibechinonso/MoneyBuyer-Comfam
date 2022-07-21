import { Reducer } from "redux";
import * as SignupTypes from "./signupTypes"
import { AppDispatchProps } from "../types";

interface SignupState {
signupStage: String
success: Boolean
}

const initialState = {
    signupStage : "biodata",
    success: false
}


const reducer: Reducer<SignupState, AppDispatchProps> = (
    state = initialState,
    {type, payload}
) => {
    switch (type) {
        case SignupTypes.SIGNUP_BIODATA : return initialState;
        case SignupTypes.SIGNUP_VERIFICATION: return {...state, signupStage: "verification", success: false}
        case SignupTypes.SIGNUP_RESEND_VERIFICATION: return {...state, signupStage: "resend_verification", success: false}
        case SignupTypes.SIGNUP_SUCCESS: return {...state, signupStage: "verification", success: true}
        default:
            return state;
    }
};

export default reducer;
