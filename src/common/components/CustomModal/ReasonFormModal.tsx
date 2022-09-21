import React, { useState } from "react";
import CustomButton from "../CustomButtons";
// import { Alerts } from "../redux/alert/alertActions";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";

type IReasonFormProps = {
  placeHolder?: any;
  onSubmitHandler: (e: React.FocusEvent<HTMLFormElement>) => void;
  // loadingInitiator:string;
};

function ReasonFormModal({ placeHolder, onSubmitHandler }: IReasonFormProps) {
  const [inputContent, setInputContent] = useState("");
  // const direction = useAppSelector((state) => state.alert.modalDirection);
  // const dispatch = useAppDispatch();
  // const modalNavHandler = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setInputContent("");
  //   if (direction === "cancel") {
  //     dispatch(Alerts("transactioncancelled"));
  //   }
  //   if (direction === "confirm") {
  //     dispatch(Alerts("transactionaccepted"));
  //   }
  // };
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
        disabled={inputContent === ""}
        type="submit"
        className="alert_modal_btn"
        action={() => null}
        actionText="Submit"
      />
    </form>
  );
}

export default ReasonFormModal;
