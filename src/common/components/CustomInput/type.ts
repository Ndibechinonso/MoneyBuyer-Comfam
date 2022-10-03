import { InputHTMLAttributes, ReactSVGElement } from "react";

interface parentElement extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string | number;
  currencyIcon?: boolean;
}

interface withoutAnything extends parentElement {
  label?: never;
  status?: never;
  inputIcon?: never;
  iconPosition?: never;
}
interface withLabelOnly extends parentElement {
  label: string;
  status?: never;
  inputIcon?: never;
  iconPosition?: never;
}
interface withStatusOnly extends parentElement {
  status: string;
  label: undefined;
  inputIcon: undefined;
  iconPosition?: never;
}
interface withLabelAndStatus extends parentElement {
  label: string;
  status: string;
  inputIcon?: never;
  iconPosition?: never;
}

interface withIcon extends parentElement {
  label: string;
  status: string;
  iconPosition: "left" | "right";
  inputIcon: ReactSVGElement;
}

export type customInput =
  | ({ variant: "withIcon" } & withIcon)
  | ({ variant: "labelAndStatusOnly" } & withLabelAndStatus)
  | ({ variant: "statusOnly" } & withStatusOnly)
  | ({ variant: "labelOnly" } & withLabelOnly)
  | ({ variant?: "default" } & withoutAnything);
