type Iicon = "+" | "-" | ">" | "<";
type Iorientation = "left" | "right";

interface buttonDefaultProps {
  loading?: boolean;
  disabled?: boolean;
  action: VoidFunction | any;
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties | undefined;
  size?: "small" | "medium" | "normal" | "large";
  color?: "primary" | "secondary";
  className?: string;
  iconOreintation?: Iorientation;
}

interface IconOnlyProps extends buttonDefaultProps {
  actionText?: never;
  iconOreintation?: never;
}
interface IconTextProps extends buttonDefaultProps {
  iconOreintation: "left" | "right";
}
interface InoIconsProps extends buttonDefaultProps {
  icon?: never;
  iconOreintation?: never;
}

export type CustomButtonProps =
  | ({ icon: Iicon; variant: "ICONONLY" } & IconOnlyProps)
  | ({
      icon: Iicon;
      iconOreintation: Iorientation;
      actionText: string;
      variant: "ICONTEXT";
    } & IconTextProps)
  | ({
      actionText: string;
      variant?: "OUTLINE";
      iconOreintation?: never;
    } & InoIconsProps);
