interface buttonDefaultProps {
    loading?: boolean;
    disabled?: boolean;
    action: VoidFunction;
    style?: React.CSSProperties | undefined;
    size?: "small" | "medium" | "normal" | "large";
    color?: "primary" | "secondary";
    className?: string;
  }
  
  interface ButtonPropsWithIcons extends buttonDefaultProps {
    variant: "ICONONLY";
    icon: "+" | "-" | ">" | "<";
    actionText?: undefined;
    iconOreintation?: undefined;
  }
  interface ButtonwithIconsandText extends buttonDefaultProps {
    variant: "ICONTEXT";
    icon: "+" | "-" | ">" | "<";
    iconOreintation: "left" | "right";
    actionText: string;
  }
  interface ButtonwithOutline extends buttonDefaultProps {
    variant: "OUTLINE";
    actionText: string;
    iconOreintation?: undefined;
    icon?: undefined;
  }
  interface standardButtonProps extends buttonDefaultProps {
    actionText: string;
    iconOreintation?: undefined;
    variant?: undefined;
    icon?: undefined;
    iconOrientation?: undefined;
  }
  
  export type CustomButtonProps =
    | standardButtonProps
    | ButtonPropsWithIcons
    | ButtonwithIconsandText
    | ButtonwithOutline;
  