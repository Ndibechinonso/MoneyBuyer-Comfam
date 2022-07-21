import { useState, useId } from "react";
import CustomButton from "../../customButtons";
import { useAppDispatch } from "../../redux/hooks";
import { Signup } from "../../redux/signup/signupActions";

const ResendVerification = () => {
  const id = useId();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("")


  return(
    <div className="resend_verification_container">
      <div className="resend_title">
        <h4>Re-enter your email address</h4>
        <p>We’ll send another verification link to your email address</p>
      </div>
      <form>
      <div className="form_group">
            <label htmlFor={`${id}-email`}> Email Address </label>
            <input
              className="resend_verification_container_form_input"
              id={`${id}-email`}
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Johnson@gmail.com"
            />
          </div>
          </form>

          <CustomButton
                  className="verify_btn"
                  disabled={!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)}
                  action={() => dispatch(Signup("verification"))}
                  actionText="Send verification"
                /> 

                <p className="sign_up_link">Go back to Sign Up</p>

    </div>
  )
}

 export default ResendVerification