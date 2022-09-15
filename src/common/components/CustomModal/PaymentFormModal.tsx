import React, { useId, useState } from "react";
import CustomButton from "../CustomButtons";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const initialState = {
  seller: "",
  walletId: "",
};

function PaymentFormModal() {
  const [inputContent, setInputContent] = useState(initialState);
  const id = useId();
  const { isloading } = useAppSelector((state) => state.isloading);
  const dispatch = useAppDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputContent((prev) => ({ ...prev, [name]: value }));
  };
  const disableBtn = Object.values(inputContent).includes("") || isloading;

  const modalNavHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputContent(initialState);
    // if (direction === "cancel") {
    //   dispatch(Alerts("transactioncancelled"));
    // }
    // if (direction === "confirm") {
    //   dispatch(Alerts("transactionaccepted"));
    // }
  };
  return (
    <form onSubmit={modalNavHandler}>
      <div>
        <label htmlFor={`${id}-user`}>Seller/Consultant</label>
        <input
          id={`${id}-user`}
          type="text"
          name="seller"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor={`${id}-wallet`}>Wallet ID</label>
        <input
          id={`${id}-wallet`}
          type="text"
          name="walletId"
          onChange={changeHandler}
        />
      </div>

      <CustomButton
        disabled={disableBtn}
        type="submit"
        className="alert_modal_btn"
        action={() => console.log("formSubmited")}
        actionText="Pay now"
      />
    </form>
  );
}

export default PaymentFormModal;
