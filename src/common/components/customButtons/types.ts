interface buttonDefaultProps {
  loading?: boolean;
  disabled?: boolean;
  action: VoidFunction | any;
  type?: "button" | "submit" | "reset" | undefined
  style?: React.CSSProperties | undefined;
  size?: "small" | "medium" | "normal" | "large";
  color?: "primary" | "secondary";
  className?: string;
}

export type Ivariant = "ICONONLY" | "ICONTEXT" | "OUTLINE";
  
interface ButtonPropsWithIcons extends buttonDefaultProps {
  variant: "ICONONLY";
  icon: "+" | "-" | ">" | "<";
  actionText?: never;
  iconOreintation?: never;
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
  

