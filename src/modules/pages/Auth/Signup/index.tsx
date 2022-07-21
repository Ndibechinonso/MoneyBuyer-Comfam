import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../../common/components/redux/hooks";
import SignupVerification from "../../../../common/components/Signup/SignupVerification";
import ResendVerification from "../../../../common/components/Signup/ResendVerification";

const Signup = () => {
  const { signupStage } = useAppSelector((state) => state.signup);

  return (
    <>
      {signupStage === "biodata" && (
        <div className="signup_container">
          <h3>CREATE YOUR ACCOUNT</h3>

          <ul className="signup_container_tabs">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "signup_container_active_tab" : ""
                }
                to={"/signup/buyer"}
              >
                BUYER{" "}
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "signup_container_active_tab" : ""
                }
                to={"/signup/seller"}
              >
                {" "}
                SELLER
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
      {signupStage === "verification" && <SignupVerification />}
      {signupStage === "resend_verification" && <ResendVerification />}
    </>
  );
};

export default Signup;
