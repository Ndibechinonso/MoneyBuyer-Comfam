import { customInput } from "./type";

function CustomTextFields({
  currencyIcon,
  onKeyDown,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  name,
  value,
  label,
  status,
  iconPosition,
  inputIcon,
}: customInput) {
  return (
    <div
      className={`customInput ${
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
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {currencyIcon && <span className="currencyIcon">₦</span>}
      {status && <p>{`${status}!`}</p>}
      {inputIcon}
    </div>
  );
}

export default CustomTextFields;
