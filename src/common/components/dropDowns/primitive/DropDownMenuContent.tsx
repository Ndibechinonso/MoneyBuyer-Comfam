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
  onPointerDownOutside?: (e: any) => void;
};

const DropDownMenuContent = React.forwardRef<HTMLDivElement, Props>(
  ({ children, onPointerDownOutside, className, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Content
        onPointerDownOutside={onPointerDownOutside}
        className={className}
        ref={forwardedRef}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    );
  }
);

export default DropDownMenuContent;
