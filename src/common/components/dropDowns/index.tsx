import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import React from 'react'
import DropDownMenuContent, { DropdownMenu } from './DropDownMenuContent';

type Props = {
    children: React.ReactNode,
    trigger: React.ReactNode
}

const DropDownWrapper =  ({children, trigger}:Props) => (
    <DropdownMenu>
      <DropdownMenuTrigger className='dropdownTrigger' >{trigger}</DropdownMenuTrigger>
      <DropDownMenuContent>
        
        {children}
      </DropDownMenuContent>
    </DropdownMenu>
  );

export default DropDownWrapper