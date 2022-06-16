import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownArrow = DropdownMenuPrimitive.Arrow;
export const DropDownCheckBoxItem = DropdownMenuPrimitive.CheckboxItem;
export const DropDownItemIndicator = DropdownMenuPrimitive.ItemIndicator;

type Props = {
  children: React.ReactNode;
  className?: string;
};

const DropDownMenuContent = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Content  className={className} ref={forwardedRef}>
        {children}
      </DropdownMenuPrimitive.Content>
    );
  }
);

export default DropDownMenuContent;
