import { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "../../redux/hooks";
import { Signup } from "../../redux/signup/signupActions";
import styled from "styled-components";
import ReactInputVerificationCode from "react-input-verification-code";
import CustomButton from "../../customButtons";
import successIcon from "../../../../static/images/success.svg";

export const StyledSeconds = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.002em;
  color: rgba(255, 255, 255, 0.4);
`;

const StyledError = styled.div`
  margin-top: 13px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.004em;
  color: #ef6c65;
`;

const StyledReactInputVerificationCode = styled.div`
  display: flex;
  justify-content: center;

  --ReactInputVerificationCode-itemWidth: 40px;
  --ReactInputVerificationCode-itemHeight: 48px;
  --ReactInputVerificationCode-itemSpacing: 8px;

  .ReactInputVerificationCode__item {
    font-size: 1.25rem;
    font-weight: 400;
    color: #282828;
    background: #ffffff;
    border: 1px solid #d4dddf;
    border-radius: 8px;
    box-shadow: none;
  }

  .ReactInputVerificationCode__item.is-active {
    box-shadow: none;
    border: 1px solid #00003d;
  }
`;

const SignupVerification = () => {
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.signup);

  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState(null) as any;

  const [seconds, setSeconds] = useState(null) as any;

  return (
    <div className="verification_container">
      {!success ? (
        <div>
          <h3>Check your Email</h3>

          <p className="verification_title">
            We have sent a verification code to your email address:
            sam******@gmail.com
          </p>

          <StyledReactInputVerificationCode>
            <ReactInputVerificationCode
              value={value}
              placeholder={""}
              length={6}
              onChange={(newValue) => {
                setValue(newValue);

                if (newValue !== "") {
                  setError(null);
                }
              }}
            />
          </StyledReactInputVerificationCode>

          {error && <StyledError>{error}</StyledError>}

          {seconds && (
            <StyledSeconds>{`Verification code has been re-sent (${seconds}s)`}</StyledSeconds>
          )}

          <p className="verification_resend">
            Didn’t get a code? <span className="cursor-pointer" onClick={()=> dispatch(Signup("resend_verification"))}>Click to resend</span>
          </p>

          <CustomButton
            className="verify_btn"
            disabled={!(value.length === 6)}
            action={() => dispatch(Signup("success"))}
            actionText="Verify"
          />
        </div>
      ) : (
        <div className="succes_container">
          <img src={successIcon} alt="success icon" />
          <h3>Email Verified</h3>

          <CustomButton
            className="verify_btn"
            action={() => console.log("success")}
            actionText="Back to Home"
          />
        </div>
      )}
      {/* <StyledButton
          onClick={() => {
            setValue("");
            setError("Incorrect code. Please try again");
            setIsInvalid(true);
            setSeconds(60);
  
            let mySeconds = 60;
  
            // TODO Clear previos interval
  
            const intervalId = setInterval(() => {
              mySeconds = mySeconds - 1;
              setSeconds(mySeconds);
  
              if (mySeconds === 0) {
                clearInterval(intervalId);
                setSeconds(null);
              }
            }, 1000);
  
            setTimeout(() => {
              setIsInvalid(false);
            }, 1000);
          }}
        >
          Send
        </StyledButton> */}
    </div>
  );
};

export default SignupVerification;
