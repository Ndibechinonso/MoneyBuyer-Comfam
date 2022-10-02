import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const DropDownItem = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Item  className={className} {...props} ref={forwardedRef}>
        {children}
      </DropdownMenuPrimitive.Item>
    );
  }
);

export default DropDownItem;
