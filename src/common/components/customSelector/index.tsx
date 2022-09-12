import React from "react";
import DropDownIcon from "../CustomIcons/DropDownIcon";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";


type checkBox = {
  variant: "checkBox";
  options?: never;
  disabled?: boolean;
  name?: string;
  value?: string;
  isChecked: boolean;
  placeholder?: string;
  refEl?: never;
  className?: string;
  onClickHandler: (args: any) => void;
};
type dropDown = {
  variant: "dropDown";
  className?: string;
  options: Array<{ label: string; value: string }>;
  disabled?: boolean;
  value?: never;
  onClickHandler: (val: string) => void;
  placeholder: string;
  onChange?: never;
  refEl: React.RefObject<HTMLDivElement>;
  name?: never;
  isChecked?: never;
};

function CustomSelector({
  refEl,
  onClickHandler,
  variant,
  options,
  name,
  isChecked,
  disabled,
  value,
  placeholder,
  className,
}: checkBox | dropDown) {
  let template: React.ReactElement | null = null;
  const dropDownInitialState = {
    showOptions: false,
    selectedOption: "",
  };
  const [dropDownState, setDropDownState] =
    React.useState(dropDownInitialState);

  const showOptionClickHandler = () => {
    const { showOptions } = dropDownState;
    setDropDownState((prev) => ({ ...prev, showOptions: !showOptions }));
  };

  const listClickHandler = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const input = e.target as HTMLElement;
    setDropDownState((prev) => ({ ...prev, selectedOption: input.innerText }));
    refEl!.current!.textContent = input.innerText;
    if (input.dataset.val) {
      onClickHandler(input.dataset.val);
    }
  };

  switch (variant) {
    case "checkBox":
      template = (
        <label className="checkBox">
          <span>{placeholder}</span>
          <input
            type="checkbox"
            name={name}
            value={value}
            onChange={onClickHandler}
            checked={isChecked}
          />
          <span className="checkmark"></span>
        </label>
      );
      break;

    case "dropDown":
      template = (
        <div
          onClick={showOptionClickHandler}
          className={`dropDown${
            dropDownState.showOptions ? "__hideParent" : ""
          }`}
        >
          <div ref={refEl} className="dropDown__result">
            {placeholder}
          </div>
          <DropDownIcon className="dropDown__icon" />
          <ul
            onClick={listClickHandler}
            className={`dropDown__list${
              dropDownState.showOptions ? "--show" : ""
            }`}
          >
            {options.map((itm) => (
              <li
                key={itm.label}
                data-val={itm.value}
                className={`${
                  dropDownState.selectedOption === itm.value
                    ? "dropDown__selected"
                    : ""
                }`}
              >
                {itm.label}
              </li>
            ))}
          </ul>
        </div>
      );
      break;

    default:
      break;
  }

  return template;
}

// const Sele = React.memo(CustomSelector)
export default CustomSelector;
