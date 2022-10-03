import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CustomButton from "../CustomButtons";
import { useAppSelector } from "../redux/hooks";

type IReasonFormProps = {
  placeHolder?: any;
  onSubmitHandler: (e: React.FocusEvent<HTMLFormElement>) => void;
};

function ReasonFormModal({ placeHolder, onSubmitHandler }: IReasonFormProps) {
  const [inputContent, setInputContent] = useState("");
  const { pathname } = useLocation();
  const { loading: transaction_loading } = useAppSelector(
    (state) => state.transactions
  );

  const disableBtn = () => {
    if (
      (pathname.includes("transaction") && transaction_loading === true) ||
      inputContent === ""
    ) {
      return true;
    }
    return false;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="reason"></label>
      <textarea
        className="message_input"
        placeholder={placeHolder}
        name="reason"
        id="reason"
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
      />
      <CustomButton
        disabled={disableBtn()}
        type="submit"
        className="alert_modal_btn"
        action={() => null}
        actionText="Submit"
      />
    </form>
  );
}

export default ReasonFormModal;
