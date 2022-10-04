import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../common/components/redux/hooks";
import route from "../../../common/routes/route";

type props = {
  children: ReactNode;
};

function Settings({ children }: props) {
  const { verified } = useAppSelector((state) => state.user.user);
  return (
    <>
      <ul className="setting__navigation">
        <li className="setting__navigation--item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "setting__navigation--item_active" : ""
            }
            to={route.protected.setting_profile}
          >
            Profile
          </NavLink>
        </li>
        {!verified && (
          <li className="setting__navigation--item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "setting__navigation--item_active" : ""
              }
              to={route.protected.setting_verification}
            >
              Verification
            </NavLink>
          </li>
        )}
        {!verified && (
          <li className="setting__navigation--item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "setting__navigation--item_active" : ""
              }
              to={route.protected.setting_bank_details}
            >
              Bank Detail
            </NavLink>
          </li>
        )}
        <li className="setting__navigation--item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "setting__navigation--item_active" : ""
            }
            to={route.protected.setting_notification}
          >
            Notification Setting
          </NavLink>
        </li>
        <li className="setting__navigation--item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "setting__navigation--item_active" : ""
            }
            to={route.protected.setting_feedback}
          >
            Give Feedback
          </NavLink>
        </li>
      </ul>
      {children}
    </>
  );
}

export default Settings;
