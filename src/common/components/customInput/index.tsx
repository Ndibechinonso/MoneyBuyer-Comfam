import { customInput } from "./type";

function CustomTextFields(props: customInput) {
  const { onKeyDown, onChange, onBlur, onFocus, onKeyUp } = props;
  const { currencyIcon, placeholder, name, value, className } = props;
  const { label, status, iconPosition, inputIcon, disabled } = props;

  return (
    <div
      className={`customInput ${className ? className : ""} ${
        iconPosition === "left" ? "customInput__left" : "customInput__right"
      }`}
    >
      {label && (
        <label
          className={`${currencyIcon === true ? "currencyIcon__label" : ""}`}
        >
          {label}
        </label>
      )}

      <input
        className={`${currencyIcon === true ? "currencyIcon__input" : ""}`}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        autoComplete="off"
      />
      {currencyIcon && <span className="currencyIcon">₦</span>}
      {status && <p>{`${status}`}</p>}
      {inputIcon}
    </div>
  );
}

export default CustomTextFields;
