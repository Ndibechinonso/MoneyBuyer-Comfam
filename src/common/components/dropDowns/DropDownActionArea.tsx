import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
type Props = {
  children: React.ReactNode;
};

const DropDownActionArea = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Item {...props} ref={forwardedRef}>
        {children}
      </DropdownMenuPrimitive.Item>
    );
  }
);

export default DropDownActionArea;
