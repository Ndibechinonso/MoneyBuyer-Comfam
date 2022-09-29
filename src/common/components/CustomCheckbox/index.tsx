import React, { InputHTMLAttributes } from "react";

interface icheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked: boolean;
  name: string;
}

function CustomCheckBox(props: icheckbox) {
  const { id, name, value, onChange, checked, disabled, label } = props;
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
