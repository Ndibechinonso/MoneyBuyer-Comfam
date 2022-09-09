import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { fetchUserDetails } from "../../../https/storage";

function Settings() {
  return (
    <>
      <ul className="setting__navigation">
        <li className="setting__navigation--item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "setting__navigation--item_active" : ""
            }
            to={"/setting/profile"}
          >
            Profile
          </NavLink>
        </li>
      { !fetchUserDetails().verified && 
        <li className="setting__navigation--item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "setting__navigation--item_active" : ""
            }
            to={"/setting/verification"}
          >
            Verification
          </NavLink>
        </li> }
        { !fetchUserDetails().verified &&   
        <li className="setting__navigation--item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "setting__navigation--item_active" : ""
            }
            to={"/setting/bank_detail"}
          >
            Bank Detail
          </NavLink>
        </li>
}
        <li className="setting__navigation--item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "setting__navigation--item_active" : ""
            }
            to={"/setting/notification"}
          >
            Notification Setting
          </NavLink>
        </li>
        <li className="setting__navigation--item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "setting__navigation--item_active" : ""
            }
            to={"/setting/give_feedback"}
          >
            Give Feedback
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Settings;
