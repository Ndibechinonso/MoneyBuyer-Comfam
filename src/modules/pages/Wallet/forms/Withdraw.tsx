import React from 'react'
import CustomButton from '../../../../common/components/CustomButtons';
import InfoIcon from '../../../../common/components/CustomIcons/Info';
import CustomTextFields from '../../../../common/components/customInput';
import CustomSelector from '../../../../common/components/customSelector';


function Withdraw() {

  const initialState = {
    amount: 0,
    expectedAmount: 0,
    paymentMethod: "",
    accountNumber:"",
    bankName:""
  };
  const [formState, setFormState] = React.useState(initialState);
  const [confirm, setConfirm] = React.useState(false);
  const refEl = React.useRef<HTMLDivElement>(null);
  const [bankConfirm, setBankConfirm] = React.useState(false)

  const confirmFormHandler = () => {
    setConfirm(!confirm);
  };
  const bankConfirmFormHandler = () => {
    setBankConfirm(!bankConfirm);
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

  return (
    <form className="wallet__withdraw" onSubmit={(e) => e.preventDefault()}>
          <div className="formInputWrapper">
            <div className="form__input ">
              <CustomTextFields
                placeholder="0.00"
                currencyIcon={true}
                onKeyDown={inputOnkeydownHandler}
                onChange={inputOnChangeHandler}
                label="Amount to withdraw"
                name="amount"
                value={formState.amount}
                variant="labelOnly"
              />
            </div>
            <div className="form__input ">
              <CustomTextFields
                placeholder="0.00"
                currencyIcon={true}
                onKeyDown={inputOnkeydownHandler}
                onChange={inputOnChangeHandler}
                label="Amount you will receive"
                name="expectedAmount"
                value={formState.expectedAmount}
                variant="labelOnly"
              />
              <div className="form__tooltip">
                <InfoIcon />
                <p className="tooltip__text">
                  please enter an amount between <span>₦0.00</span> and{" "}
                  <span>₦0.00</span>
                </p>
              </div>
            </div>
            <div className="form__input ">
              <label>Select saved NGN recipient</label>
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
                <p className="confirmForm__text">Withdraw to another account</p>
              </div>
            </div>
            <div className="form__input">
              <CustomTextFields
                variant="labelOnly"
                label="Bank account number"
                name="accountNumber"
                placeholder="Enter bank account number"
                value={formState.accountNumber}
                onChange={inputOnChangeHandler}
              />
            </div>
            <div className="form__input ">
              <label>Select saved NGN recipient</label>
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
                  isChecked={bankConfirm}
                  onClickHandler={bankConfirmFormHandler}
                />
                <p className="confirmForm__text">I confirm to be debited NGN 0.00 to send</p>
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
              action={() => {
                console.log("hello");
              }}
              actionText="Proceed"
            />
          </div>
        </form>
  )
}

export default Withdraw