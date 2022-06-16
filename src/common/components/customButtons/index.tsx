import { ReactElement } from "react";
import { CustomButtonProps } from "./types"

function CustomButton(props: CustomButtonProps) {
  const {
    actionText,
    loading,
    disabled,
    action,
    type,
    style,
    variant,
    size,
    color,
    className,
    icon,
    iconOreintation,
  } = props;

  let template: ReactElement | null = null;
  let defaultClassName = className ? className : "";
  let iconItem: ReactElement | null = null;

  if (color === "secondary") {
    defaultClassName = `${defaultClassName} btnSecondary ${
      variant === "OUTLINE" ? "btnSecondary__outline" : ""
    }`;
  } else {
    defaultClassName = `${defaultClassName} btnPrimary ${
      variant === "OUTLINE" ? "btnPrimary__outline" : ""
    }`;
  }

  if (icon) {
    if (icon === "+") {
      iconItem = <span className="iconPlus"></span>;
    }
    if (icon === "-") {
      iconItem = <span className="iconMinus"></span>;
    }
    if (icon === "<") {
      iconItem = <span className="iconLess"></span>;
    }
    if (icon === ">") {
      iconItem = <span className="iconGreat"></span>;
    }
  }

  if (size !== undefined) {
    if (size === "small") {
      defaultClassName = `${defaultClassName} btn__small`;
    }
    if (size === "medium") {
      defaultClassName = `${defaultClassName} btn__medium ${
        variant === "ICONTEXT"
          ? "btn__medium__text"
          : variant === "OUTLINE"
          ? ""
          : ""
      }`;
    }
    if (size === "large") {
      defaultClassName = `${defaultClassName} btn__large ${
        variant === "ICONTEXT"
          ? "btn__large__text"
          : variant === "OUTLINE"
          ? ""
          : ""
      }`;
    }
  } else if (!size || size === "normal") {
    defaultClassName = `${defaultClassName} btn__normal ${
      variant === "ICONTEXT"
        ? "btn__normal__text"
        : variant === "OUTLINE"
        ? ""
        : ""
    }`;
  }

  switch (variant) {
    case "ICONONLY":
      template = (
        <button
          className={`btn__icon ${defaultClassName} btn`}
          onClick={action}
          disabled={loading || disabled}
          style={style}
          type={type}
        >
          {iconItem}
        </button>
      );

      break;
    case "ICONTEXT":
      template = (
        <button
          className={`${defaultClassName}  ${
            iconOreintation === "right" ? "btn__ort" : ""
          } btn`}
          onClick={action}
          disabled={loading || disabled || !icon}
          style={style}
          type={type}
        >
          {iconItem}
          {actionText}
        </button>
      );

      break;
    case "OUTLINE":
      template = (
        <button
          onClick={action}
          className={`${defaultClassName} btn`}
          disabled={loading || disabled}
          style={style}
          type={type}
        >
          {actionText}
        </button>
      );
      break;

    default:
      template = (
        <button
          onClick={action}
          className={`${defaultClassName} btn`}
          disabled={loading || disabled}
          style={style}
          type={type}
        >
          {actionText}
        </button>
      );
      break;
  }

  return template;
}

export default CustomButton;
