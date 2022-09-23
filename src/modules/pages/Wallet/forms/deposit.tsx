import React, { useRef, useState } from "react";
import CustomButton from "../../../../common/components/CustomButtons";
import InfoIcon from "../../../../common/components/CustomIcons/Info";
import CustomTextFields from "../../../../common/components/CustomInput";
import CustomSelector from "../../../../common/components/CustomSelector";
import PaystackPop from "@paystack/inline-js";
import customToast from "../../../../common/components/CustomToast";
import admin from "../../../service/admin";
import { PAYSTACK_KEY } from "../../../../https/constant";
import { fetchUserDetails } from "../../../../https/storage";
import { useAppDispatch } from "../../../../common/components/redux/hooks";
import {
  loadStart,
  loadStop,
} from "../../../../common/components/redux/apploader";
import { Alerts } from "../../../../common/components/redux/alert/alertActions";

function Deposit() {
  const initialState = {
    amount: 0,
    // expectedAmount: 0,
    paymentMethod: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [confirm, setConfirm] = useState(false);
  const refEl = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const paystack = new PaystackPop();

  const confirmFormHandler = () => {
    setConfirm(!confirm);
  };

  const options = [
    { label: "Pay Via Card", value: "Pay Via Card" },
    { label: "Pay Via Transfer", value: "Pay Via Transfer" },
    { label: "Pay Via Bank", value: "Pay Via Bank" },
  ];

  const selectClickHandler = (value: string) => {
    setFormState((prev) => ({ ...prev, paymentMethod: value }));
  };

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (!isNaN(parseFloat(value))) {
      setFormState((prev) => ({ ...prev, [name]: parseFloat(value) }));
    }
  };

  const inputOnkeydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const { name } = e.currentTarget;
    const xName =
      (name === "amount" || name === "expectedAmount") && formState[name];
    if (xName.toString().length === 1 && key === "Backspace") {
      setFormState((prev) => ({ ...prev, [name]: 0 }));
    }
  };
  const buttonEnabler =
    !confirm || formState.paymentMethod === "" || formState.amount === 0;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    paystack.newTransaction({
      key: PAYSTACK_KEY,
      email: fetchUserDetails().email,
      amount: `${formState.amount.toString()}00`,

      onSuccess: (transaction: any) => {
        dispatch(loadStart("wallet_transaction"));
        admin
          .fundWallet({ reference: transaction.reference })
          .then((res) => dispatch(Alerts("despositsuccessful")))
          .catch((err) => customToast(err.message, true))
          .finally(() => dispatch(loadStop()));
      },
      onCancel: () => {
        customToast("error occured", true);
      },
    });
  };

  return (
    <form className="wallet__deposit" onSubmit={onSubmitHandler}>
      <div className="formInputWrapper">
        <div className="form__input ">
          <CustomTextFields
            placeholder="0.00"
            currencyIcon={true}
            onBlur={() => formState.amount.toFixed(2)}
            onKeyDown={inputOnkeydownHandler}
            onChange={inputOnChangeHandler}
            label="Amount to top-up"
            name="amount"
            value={formState.amount}
            variant="labelOnly"
          />
        </div>
        
        <div className="form__input ">
          <label>Select Payment Method</label>
          <CustomSelector
            refEl={refEl}
            onClickHandler={selectClickHandler}
            options={options}
            placeholder="Select an option"
            variant="dropDown"
          />
          <div className="confirmForm">
            <CustomSelector
              variant="checkBox"
              isChecked={confirm}
              onClickHandler={confirmFormHandler}
            />
            <p className="confirmForm__text">
              I confirm to be debited <span>NGN {formState.amount.toFixed(2)}</span> for Balance top-up
            </p>
          </div>
        </div>
      </div>
      <div className="formButtonWrapper">
        <CustomButton
          type="button"
          variant="OUTLINE"
          action={() => console.log("first")}
          actionText="Cancel"
        />

        <CustomButton
          type="submit"
          disabled={buttonEnabler}
          action={() => null}
          actionText="Proceed"
        />
      </div>
    </form>
  );
}

export default Deposit;
