import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../../../common/components/CustomButtons";
import CustomTextFields from "../../../../common/components/CustomInput";
import CustomCheckBox from "../../../../common/components/CustomCheckbox";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../common/components/redux/hooks";
import {
  fetchAllBanks,
  fetchWalletInfo,
} from "../../../../common/components/redux/fundsAndWallet/fundsAndWalletAsyncThunk";
import { Select, SelectItem } from "../../../../common/components/CustomSelect";
import admin from "../../../service/admin";
import { Alerts } from "../../../../common/components/redux/alert/alertActions";
import customToast from "../../../../common/components/CustomToast";

const initialState = {
  account_number: "",
  bank_code: "",
  amount: "",
  bank_name: "",
  recipients_available: false,
  use_new_recipients: false,
  confirm_amount_to_pay: false,
  account_name: "",
  selected_recipient: "",
  account_number_verified: true,
};
function Withdraw() {
  const [state, setState] = useState(initialState);
  const mountOnce = useRef(false);
  const allbanks = useAppSelector((state) => state.wallet.banks);
  const saved_recipients = useAppSelector(
    (state) => state.user.user.bank_details
  );
  const dispatch = useAppDispatch();

  const btn_disable =
    state.account_number === "" ||
    state.bank_code === "" ||
    state.amount === "" ||
    state.account_number_verified === false ||
    state.confirm_amount_to_pay === false;

  const verifyAccountNumber = () => {
    const { account_number, bank_code } = state;
    if (account_number.length === 10 && bank_code !== "") {
      admin
        .verifyAccountNumber({ account_number, bank_code })
        .then((res) =>
          setState((prev) => ({
            ...prev,
            account_name: res.data.account_name,
            account_number_verified: true,
          }))
        )
        .catch((err) => console.log(err));
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const { name, value, type, checked } = e.target;
    const numbers_regex = new RegExp("^[0-9]*$");
    const account_regex = new RegExp("^[0-9]{0,10}$");
    switch (type) {
      case "checkbox":
        setState((prev) => ({ ...prev, [name]: !prev[name] }));
        if (name === "use_new_recipients" && checked) {
          setState((prev) => ({
            ...prev,
            bank_name: initialState.bank_name,
            bank_code: initialState.bank_code,
            account_name: initialState.account_name,
            account_number: initialState.account_number,
            selected_recipient: initialState.selected_recipient,
            account_number_verified: false,
          }));
        }
        break;
      default:
        if (numbers_regex.test(value) && name !== "account_number") {
          setState((prev) => ({ ...prev, [name]: value }));
        }
        if (account_regex.test(value) && name === "account_number") {
          setState((prev) => ({ ...prev, [name]: value }));
        }
        break;
    }
  };

  const selectHandler = (e: any, name: "banks" | "recipients") => {
    const data = JSON.parse(e);
    if (name === "banks") {
      setState((prev) => ({
        ...prev,
        bank_code: data.code,
        bank_name: data.name,
      }));
    }
    if (name === "recipients") {
      setState((prev) => ({
        ...prev,
        // bank_code: data.code,    will need a bank code
        bank_name: data.bank_name,
        account_name: data.account_name,
        account_number: data.account_number,
        selected_recipient: `${data.account_name} - ${data.account_number} - ${data.bank_name}`,
      }));
    }
  };

  useEffect(() => {
    if (mountOnce.current) {
      return;
    }
    if (saved_recipients.length !== 0) {
      setState((prev) => ({
        ...prev,
        recipients_available: true,
        account_number_verified: true,
      }));
    }
    if (saved_recipients.length === 0) {
      setState((prev) => ({
        ...prev,
        recipients_available: false,
        use_new_recipients: true,
      }));
    }
    if (allbanks?.length === 0) {
      dispatch(fetchAllBanks());
    }
    mountOnce.current = true;
  }, []); //eslint-disable-line

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(Alerts("processing"));
    admin
      .walletWithdraw(state)
      .then(() => dispatch(fetchWalletInfo()))
      .catch((err) => {
        customToast(err.message, true);
        dispatch(Alerts(""));
      });
  };

  return (
    <form className="wallet__withdraw" onSubmit={submitHandler}>
      <div className="formInputWrapper">
        <div className="form__input ">
          <CustomTextFields
            variant="labelOnly"
            label="Amount to withdraw"
            name="amount"
            value={state.amount}
            placeholder="0.00"
            currencyIcon={true}
            onChange={changeHandler}
          />
        </div>
        {state.recipients_available ? (
          <div className="form__input ">
            <label htmlFor="recipients">Select saved NGN recipient</label>
            <Select
              placeholder="List Of Your Recipients"
              className="wallet-select"
              name="recipients"
              id="recipients"
              value={state.selected_recipient}
              onChange={(e) => selectHandler(e, "recipients")}
              disabled={state.use_new_recipients}
            >
              {saved_recipients.map((acc, id) => (
                <SelectItem key={acc._id} value={JSON.stringify(acc)}>
                  {acc.account_name} - {acc.account_number} - {acc.bank_name}
                </SelectItem>
              ))}
            </Select>
            <div style={{ marginTop: "1.25rem" }} className="confirmForm">
              <CustomCheckBox
                onChange={changeHandler}
                name="use_new_recipients"
                id="use_new_recipients"
                checked={state.use_new_recipients}
                label="Withdraw to another account"
              />
            </div>
          </div>
        ) : null}
        <div className="form__input">
          <CustomTextFields
            variant="labelAndStatusOnly"
            label="Bank account number"
            name="account_number"
            placeholder="Enter bank account number"
            onKeyUp={verifyAccountNumber}
            status={
              state.use_new_recipients
                ? state.account_name
                : initialState.account_name
            }
            value={
              state.use_new_recipients
                ? state.account_number
                : initialState.account_number
            }
            onChange={changeHandler}
            disabled={!state.use_new_recipients}
          />
        </div>
        <div className="form__input ">
          <div className="form__input ">
            <label htmlFor="banks">Select Bank</label>
            <Select
              placeholder="Select Bank To Transfer To"
              className="wallet-select"
              name="banks"
              id="banks"
              value={state.bank_name}
              onChange={(e) => selectHandler(e, "banks")}
              disabled={!state.use_new_recipients}
              onFocus={verifyAccountNumber}
            >
              {allbanks?.map((bank) => (
                <SelectItem key={bank.id} value={JSON.stringify(bank)}>
                  {bank.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="confirmForm">
            <CustomCheckBox
              checked={state.confirm_amount_to_pay}
              id="confirm_amount_to_pay"
              name="confirm_amount_to_pay"
              onChange={changeHandler}
              label={`I confirm to be debited NGN ${
                state.amount !== "" ? parseInt(state.amount).toFixed(2) : "0.00"
              } to send`}
            />
          </div>
        </div>
      </div>
      <div className="formButtonWrapper">
        <CustomButton
          type="submit"
          disabled={btn_disable}
          action={() => null}
          actionText="Proceed"
        />
      </div>
    </form>
  );
}

export default Withdraw;
