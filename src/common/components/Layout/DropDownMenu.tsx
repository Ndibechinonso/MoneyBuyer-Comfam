import React from 'react'
import { Link } from 'react-router-dom'
import LogoutIcon from '../customIcons/LogoutIcon'
import ReminderIcon from '../customIcons/ReminderIcon'
import SettingsIcon from '../customIcons/SettingsIcon'
import UserIcon from '../customIcons/UserIcon'

interface menuProps {
  dropDownHandler : () => void
}

function DropDownMenu({dropDownHandler}:menuProps) {
  return (
    <nav className='header__dropDownMenu'>
      <ul className='header__dropDownMenu--container' onClick={dropDownHandler}>
          <li className='header__dropDownMenu--itm'>
            <Link to={"/setting/profile"}><UserIcon />View Profile</Link>
          </li>
          <li className='header__dropDownMenu--itm'>
            <Link to={"/setting/bank_detail"}><SettingsIcon />Settings</Link>
          </li>
          <li className='header__dropDownMenu--itm'>
            <Link to={"/setting/notification"}><ReminderIcon />Send Delivery Reminder</Link>
          </li>
          <li className='header__dropDownMenu--itm'>
            <button><LogoutIcon />Log Out</button>
          </li>
      </ul>
    </nav>
  )
}

export default DropDownMenu