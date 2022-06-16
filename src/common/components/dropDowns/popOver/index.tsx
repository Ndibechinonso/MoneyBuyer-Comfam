import React from "react";
import { Popover, PopoverTrigger } from "./PopOverMenu";

type Props = {
  children: React.ReactNode;
  content: React.ReactElement;
};

function PopOver({ children, content }: Props) {
  return (
    <Popover defaultOpen >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      {content}
    </Popover>
  );
}

export default PopOver;
