import { CustomButtonProps } from "./types";

function CustomButton(props: CustomButtonProps) {
  const { actionText, loading, disabled, action } = props;
  const { style, variant, size } = props;
  const { color, className, icon, iconOreintation } = props;

  let defaultClassName = className ? className : "";
  let iconItem: any;

  /* Add className based on the color props */
  switch (color) {
    case "secondary":
      defaultClassName = `${defaultClassName} btnSecondary ${
        variant === "OUTLINE" ? "btnSecondary__outline" : ""
      }`;
      break;

    default:
      defaultClassName = `${defaultClassName} btnPrimary ${
        variant === "OUTLINE" ? "btnPrimary__outline" : ""
      }`;
      break;
  }

  /* Add icon type based on the icon props */
  switch (icon) {
    case "+":
      iconItem = <span className="iconPlus" />;
      break;
    case "-":
      iconItem = <span className="iconMinus" />;
      break;
    case "<":
      iconItem = <span className="iconLess" />;
      break;
    case ">":
      iconItem = <span className="iconGreat" />;
      break;

    default:
      iconItem = null;
      break;
  }

  /* Add className based on the size props */
  switch (size) {
    case "small":
    case "medium":
    case "large":
      defaultClassName = `${defaultClassName} btn__${size} ${
        variant === "ICONTEXT" ? `btn__${size}__text` : ""
      }`;

      break;

    default:
      defaultClassName = `${defaultClassName} btn__normal ${
        variant === "ICONTEXT" ? "btn__normal__text" : ""
      }`;
      break;
  }

  return (
    <button
      onClick={action}
      className={`${defaultClassName}  ${
        iconOreintation === "right" ? "btn__ort" : ""
      } ${loading ? "btn__loading" : ""} btn`}
      disabled={loading || disabled}
      style={style}
    >
      {iconItem ? iconItem : null}
      <span>{actionText}</span>
    </button>
  );
}

export default CustomButton;
