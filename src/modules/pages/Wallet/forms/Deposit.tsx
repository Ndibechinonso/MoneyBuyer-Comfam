import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../../../common/components/CustomButtons";
import CustomTextFields from "../../../../common/components/CustomInput";
import PaystackPop from "@paystack/inline-js";
import customToast from "../../../../common/components/CustomToast";
import admin from "../../../service/admin";
import { PAYSTACK_KEY } from "../../../../https/constant";
import { fetchUserDetails } from "../../../../https/storage";
import { useAppDispatch } from "../../../../common/components/redux/hooks";
import { Alerts } from "../../../../common/components/redux/alert/alertActions";
import { Select, SelectItem } from "../../../../common/components/CustomSelect";
import { fetchWalletInfo } from "../../../../common/components/redux/fundsAndWallet/fundsAndWalletAsyncThunk";
import CustomCheckBox from "../../../../common/components/CustomCheckbox";
import { toNaira } from "../../../../common/utils/helpers";

function Deposit() {
  const initialState = {
    amount: "",
    paymentMethod: "",
    confirm: false,
  };
  const [formState, setFormState] = useState(initialState);
  const unmountOnce = useRef(true);
  const select_value =
    formState.paymentMethod === ""
      ? "Select an option"
      : formState.paymentMethod;

  const dispatch = useAppDispatch();

  // const confirmFormHandler = () =>
  //   setFormState((prev) => ({ ...prev, confirm: !prev.confirm }));

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const numbers_regex = new RegExp("^[0-9]*$");
    switch (type) {
      case "checkbox":
        setFormState((prev) => ({ ...prev, [name]: !prev[name] }));
        break;
      default:
        if (numbers_regex.test(value)) {
          setFormState((prev) => ({ ...prev, [name]: value }));
        }
        break;
    }
  };

  const options = [
    { label: "Pay Via Card", value: "Pay Via Card" },
    { label: "Pay Via Transfer", value: "Pay Via Transfer" },
    { label: "Pay Via Bank", value: "Pay Via Bank" },
  ];

  const selectClickHandler = (value: string) => {
    setFormState((prev) => ({ ...prev, paymentMethod: value }));
  };

  useEffect(() => {
    if (unmountOnce.current) {
      unmountOnce.current = false;
      return;
    }
    return () => {
      if (document.querySelectorAll("iframe")) {
        document
          .querySelectorAll("iframe")
          .forEach((frame) => frame.parentNode.removeChild(frame));
      }
    };
  }, []);

  const buttonEnabler =
    !formState.confirm ||
    formState.paymentMethod === "" ||
    formState.amount === "";

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: PAYSTACK_KEY,
      email: fetchUserDetails().email,
      amount: `${formState.amount}00`,

      onSuccess: (transaction: any) => {
        dispatch(Alerts("processing"));
        admin
          .fundWallet({ reference: transaction.reference })
          .then((res) => {
            dispatch(Alerts("despositsuccessful"));
            dispatch(fetchWalletInfo());
            setFormState(initialState);
          })
          .catch((err) => {
            customToast(err.message, true);
            dispatch(Alerts(""));
          });
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
            onChange={changeHandler}
            label="Amount to top-up"
            name="amount"
            value={formState.amount}
            variant="labelOnly"
          />
        </div>

        <div className="form__input ">
          <label>Select Payment Method</label>
          <Select
            onChange={selectClickHandler}
            className="wallet-select"
            placeholder="Select an option"
            name="payment_method"
            value={select_value}
          >
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </Select>

          <div className="confirmForm">
            <CustomCheckBox
              id="confirm"
              name="confirm"
              checked={formState.confirm}
              onChange={changeHandler}
              label={`I confirm to be debited ${
                formState.amount === ""
                  ? toNaira("0")
                  : toNaira(formState.amount)
              }.00 for Balance top-up`}
            />
          </div>
        </div>
      </div>
      <div className="formButtonWrapper">
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
