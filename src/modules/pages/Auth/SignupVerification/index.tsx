import { useState, FormEvent } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../../../../common/components/CustomButtons";
import customtoast from "../../../../common/components/CustomToast";
import {
  loadingStart,
  loadingStop,
} from "../../../../common/components/redux/apploader";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../common/components/redux/hooks";
import { Signup } from "../../../../common/components/redux/signup/signupActions";
import route from "../../../../common/routes/route";
import successIcon from "../../../../static/images/success.svg";
import auth from "../../../service/auth";

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
  const { isloading } = useAppSelector((state) => state.isloading);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const [query] = useSearchParams();

  const harshemail = (mail: string | null) => {
    if (mail) {
      const [account, provider] = mail.split("@");
      const result = [];
      for (let i = 0; i < account.length; i++) {
        const char = account[i];
        if ((account.length > 3 && i < 3) || (account.length <= 3 && i === 0)) {
          result.push(char);
        }
        if (
          (account.length > 3 && i >= 3) ||
          (account.length <= 3 && i !== 0)
        ) {
          result.push("*");
        }
      }
      return `${result.join("")}@${provider}`;
    }
  };

  const [value, setValue] = useState({
    confirmationCode: "",
    email: query.get("email"),
  });
  const [error, setError] = useState(null) as any;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loadingStart("verify_code"));
    auth
      .verifyBuyer(value)
      .then((res) => {
        setSuccess((prev) => !prev);
      })
      .catch((err) => {
        customtoast(err.message, true);
        setValue((prev) => ({ ...prev, confirmationCode: "" }));
      })
      .finally(() => dispatch(loadingStop()));
  };

  const handlerResendCode = () => {
    dispatch(loadingStart("resend_code"));
    setValue((prev) => ({ ...prev, confirmationCode: "" }));
    auth
      .resendVerifyBuyer({ email: query.get("email") })
      .then((res) => customtoast("Sucess, Check your mail"))
      .catch((err) => customtoast("Fail, Error Encountered", true))
      .finally(() => dispatch(loadingStop()));
  };

  return (
    <div className="verification_container">
      {!success ? (
        <form onSubmit={handleSubmit}>
          <h3>Check your Email</h3>
          <p className="verification_title">
            We have sent a verification code to your email address: &nbsp;
            {harshemail(query.get("email"))}
          </p>

          <StyledReactInputVerificationCode>
            <ReactInputVerificationCode
              value={value.confirmationCode}
              placeholder={""}
              length={6}
              onChange={(newValue: string) => {
                setValue((prev) => ({ ...prev, confirmationCode: newValue }));

                if (newValue !== "") {
                  setError(null);
                }
              }}
            />
          </StyledReactInputVerificationCode>

          {error && <StyledError>{error}</StyledError>}

          {/* {seconds && (
            <StyledSeconds>{`Verification code has been re-sent (${seconds}s)`}</StyledSeconds>
          )} */}

          <p className="verification_resend">
            Didn’t get a code?{" "}
            <span className="cursor-pointer" onClick={handlerResendCode}>
              Click to resend
            </span>
          </p>

          <CustomButton
            className="verify_btn"
            type="submit"
            disabled={!(value.confirmationCode.length === 6) || isloading}
            action={() => dispatch(Signup("success"))}
            actionText="Verify"
          />
        </form>
      ) : (
        <div className="succes_container">
          <img src={successIcon} alt="success icon" />
          <h3>Email Verified</h3>

          <CustomButton
            className="verify_btn"
            action={() => navigate(route.nonprotected.buyer.login)}
            actionText="Back to Home"
          />
        </div>
      )}
    </div>
  );
};

export default SignupVerification;
