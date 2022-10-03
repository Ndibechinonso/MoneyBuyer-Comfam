import React, { RefObject, useEffect, useRef } from "react";
import CustomButton from "../../../../common/components/CustomButtons";
import CustomTextFields from "../../../../common/components/CustomInput";
import CustomCheckBox from "../../../../common/components/CustomCheckbox";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../common/components/redux/hooks";
import {
  fetchAllBanks,
  verifyAccount,
  withdrawfromwallet,
} from "../../../../common/components/redux/fundsAndWallet/fundsAndWalletAsyncThunk";
import { Select, SelectItem } from "../../../../common/components/CustomSelect";
import { Alerts } from "../../../../common/components/redux/alert/alertActions";
import {
  recipientsAvailable,
  recipientsNotAvailable,
  selectABank,
  selectARecipient,
  updateWithdrawalCheckBox,
  updateWithdrawalFormData,
  updateNewRecipients,
  resetWithdrawalform,
} from "../../../../common/components/redux/fundsAndWallet/fundsAndWalletSlice";
import { fetchNotifications } from "../../../../common/components/redux/notifications/notificationsAsyncThunk";

type Props = {
  titleRef: RefObject<any>;
};
const initialState = {
  account_number: "",
  account_name: "",
};
function Withdraw({ titleRef }: Props) {
  const mountOnce = useRef(false);
  const runUnmount = useRef(false);
  const {
    banks: allbanks,
    loading,
    withdrawalform: state,
  } = useAppSelector((state) => state.wallet);
  const saved_recipients = useAppSelector(
    (state) => state.user.user.bank_details
  );
  const modal = useAppSelector(state => state.alert.modal)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading && state.account_number_verified && state.account_name) {
      dispatch(Alerts("processing"));
    }
    if (loading === false && modal) {
      dispatch(fetchNotifications(1))
      dispatch(resetWithdrawalform())
      dispatch(Alerts(""));
      titleRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [loading]);

  useEffect(() => {
    if (runUnmount.current === false) {
      runUnmount.current = true;
      return;
    }

    return () => {
      const values = Object.keys(state).map((key) =>
        state[key] === false || state[key] === "" ? true : false
      );
      if (values.includes(false)) {
        dispatch(resetWithdrawalform());
      }
    };
  }, []);

  const btn_disable =
    state.account_number === "" ||
    state.bank_code === "" ||
    state.amount === "" ||
    state.account_number_verified === false ||
    state.confirm_amount_to_pay === false;

  const verifyAccountNumber = () => {
    const { account_number, bank_code } = state;
    if (account_number.length === 10 && bank_code !== "") {
      dispatch(verifyAccount(state));
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const { name, value, type, checked } = e.target;
    const numbers_regex = new RegExp("^[0-9]*$");
    const account_regex = new RegExp("^[0-9]{0,10}$");
    switch (type) {
      case "checkbox":
        dispatch(updateWithdrawalCheckBox({ name }));
        if (name === "use_new_recipients" && checked) {
          dispatch(updateNewRecipients());
        }
        break;
      default:
        if (numbers_regex.test(value) && name !== "account_number") {
          dispatch(updateWithdrawalFormData({ name, value }));
        }
        if (account_regex.test(value) && name === "account_number") {
          dispatch(updateWithdrawalFormData({ name, value }));
        }
        break;
    }
  };

  const selectHandler = (e: any, name: "banks" | "recipients") => {
    const data = JSON.parse(e);
    if (name === "banks") {
      dispatch(selectABank(data));
    }
    if (name === "recipients") {
      dispatch(selectARecipient(data));
    }
  };

  useEffect(() => {
    if (mountOnce.current) {
      return;
    }
    if (saved_recipients.length !== 0) {
      dispatch(recipientsAvailable());
    }
    if (saved_recipients.length === 0) {
      dispatch(recipientsNotAvailable());
    }
    if (allbanks?.length === 0) {
      dispatch(fetchAllBanks());
    }
    mountOnce.current = true;
  }, []); //eslint-disable-line

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(withdrawfromwallet(state));
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
          loading={loading}
        />
      </div>
    </form>
  );
}

export default Withdraw;
