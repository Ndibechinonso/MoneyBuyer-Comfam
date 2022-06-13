import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

type Props = {
  children: React.ReactNode;
};

const DropDownMenuContent = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Content ref={forwardedRef}>
        {children}
        <DropdownMenuPrimitive.Arrow className="dropdownArrow" />
      </DropdownMenuPrimitive.Content>
    );
  }
);

export default DropDownMenuContent;
