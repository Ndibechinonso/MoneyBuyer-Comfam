import { customInput } from "./type";

function CustomTextFields({
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
    <div className={`customInput ${iconPosition === "left"?"customInput__left":"customInput__right"}`}>
      {label && <label>{label}</label>}
      <input
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {status && <p>{`${status}!`}</p>}
      {inputIcon}
    </div>
  );
}

export default CustomTextFields;
