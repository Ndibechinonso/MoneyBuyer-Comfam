// your-select.js

import React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

interface Ibasic {
  children: React.ReactNode;
  className?: string;
  value: any;
}

interface Iselect extends Ibasic {
  name?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLButtonElement, Iselect>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Root
        value={props.value}
        name={props.name}
        onValueChange={props.onChange}

      >
        <SelectPrimitive.Trigger
          disabled={props.disabled}
          id={props.id}
          className={props.className}
          ref={forwardedRef}
        >
          {props.value === "" ? (
            <SelectPrimitive.Value placeholder={props.placeholder} />
          ) : (
            <SelectPrimitive.Value aria-label={props.value}>
              {props.value}
            </SelectPrimitive.Value>
          )}

          <SelectPrimitive.Icon className="select-icon">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="select-content">
            <SelectPrimitive.ScrollUpButton className="select-scroll-btn">
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>

            <SelectPrimitive.Viewport className="select-view_port">
              {children}
            </SelectPrimitive.Viewport>

            <SelectPrimitive.ScrollDownButton className="select-scroll-btn">
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);
export const SelectItem = React.forwardRef<HTMLDivElement, Ibasic>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className="select-item"
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

        <SelectPrimitive.ItemIndicator className="select-item-indicator">
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    );
  }
);
