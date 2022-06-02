import { InputHTMLAttributes, ReactSVGElement } from "react";

interface parentElement extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    value: string | number,
    currencyIcon?: boolean
  }
  
  interface withoutAnything extends parentElement {
    variant: "default";
    label?: never;
    status?: never;
    inputIcon?: never;
    iconPosition?:never
  }
  interface withLabelOnly extends parentElement {
    variant: "labelOnly";
    label: string;
    status?: never;
    inputIcon?: never;
    iconPosition?:never;
  }
  interface withStatusOnly extends parentElement {
    variant: "statusOnly";
    label?: undefined;
    status?: "success" | "warning" | "error";
    inputIcon?: undefined;
    iconPosition?:never;
  }
  interface withLabelAndStatus extends parentElement {
    variant: "labelAndStatusOnly";
    label: string;
    status: "success" | "warning" | "error";
    inputIcon?: undefined;
    iconPosition?:never
  }
  
  interface withIcon extends parentElement {
    variant: "withIcon";
    label: string;
    status: "success" | "warning" | "error";
    iconPosition:"left" | "right";
    inputIcon: ReactSVGElement;
  }
  
export  type customInput = withoutAnything | withLabelOnly | withStatusOnly | withLabelAndStatus | withIcon