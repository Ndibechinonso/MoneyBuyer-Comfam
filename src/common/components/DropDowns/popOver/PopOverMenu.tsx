import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

type Props = {
    children: React.ReactNode;
    className?: string;
  };

export const PopoverContent = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, forwardedRef) => (
    <PopoverPrimitive.Content sideOffset={5} ref={forwardedRef}>
      {children}
    </PopoverPrimitive.Content>
  )
);