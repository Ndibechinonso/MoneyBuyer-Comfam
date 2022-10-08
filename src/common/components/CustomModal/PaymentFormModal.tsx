import React, { useId, useState } from "react";
import CustomButton from "../CustomButtons";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const initialState = {
  seller: "",
  walletId: "",
};

const PaymentFormModal = () => {
  const [inputContent, setInputContent] = useState(initialState);
  const id = useId();
  const { isloading } = useAppSelector((state) => state.isloading);
  const dispatch = useAppDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputContent((prev) => ({ ...prev, [name]: value }));
  };
  const checkEmptyValues = Object.values(inputContent).includes("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputContent(initialState);
    if (checkEmptyValues === false) {
      dispatch(Alerts("unsuccessfulltransaction"));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor={`${id}-user`}>Seller/Consultant</label>
        <input
          autoComplete="off"
          id={`${id}-user`}
          type="text"
          name="seller"
          placeholder="Kennedy Garry"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor={`${id}-wallet`}>Wallet ID</label>
        <input
          autoComplete="off"
          id={`${id}-wallet`}
          type="text"
          name="walletId"
          placeholder="0000-1234-2334"
          onChange={changeHandler}
        />
      </div>
      <CustomButton
        disabled={checkEmptyValues || isloading}
        type="submit"
        className="alert_modal_btn"
        action={() => null}
        actionText="Pay now"
      />
    </form>
  );
}

export default PaymentFormModal;
