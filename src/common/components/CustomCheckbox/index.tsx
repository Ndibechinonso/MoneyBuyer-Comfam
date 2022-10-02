import React, { InputHTMLAttributes, useId } from "react";

interface icheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked: boolean;
  name: string;
}

function CustomCheckBox(props: icheckbox) {
  const { name, value, onChange, checked, disabled, label } = props;
  const id = useId()
  return (
    <label htmlFor={`checkbox-${id}`} className="checkBox">
      <span>{label}</span>
      <input
        id={`checkbox-${id}`}
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export default CustomCheckBox;
