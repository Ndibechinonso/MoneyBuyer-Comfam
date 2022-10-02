import React from "react";
import { DropdownMenu, DropdownMenuTrigger } from "./DropDownMenuContent";

type Props = {
  children: React.ReactNode;
  content: React.ReactElement;
};

function DropDown({ children, content }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="dropdownTrigger">
        {children}
      </DropdownMenuTrigger>
      {content}
    </DropdownMenu>
  );
}

export default DropDown;
