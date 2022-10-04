import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../../common/components/redux/hooks";
import SignupVerification from "../../../../common/components/Signup/SignupVerification";
import ResendVerification from "../../../../common/components/Signup/ResendVerification";
import { ReactNode } from "react";

type props = {
  children:ReactNode
}

const Signup = ({children}:props) => {
  const { signupStage } = useAppSelector((state) => state.signup);
  const { pathname } = useLocation();
  const getAppPath = (path: string) => {
    if (path.includes("seller")) {
      return "seller";
    }
    if (path.includes("buyer")) {
      return "buyer";
    }
  };

  return (
    <>
      {signupStage === "biodata" && (
        <>
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
            {children}
          </div>
          <p className="signup_link_div">
            Already have an account?{" "}
            <Link to={`/signin/${getAppPath(pathname)}`}>
              <span className="signup_link">Sign In</span>
            </Link>
          </p>
        </>
      )}
      {signupStage === "verification" && <SignupVerification />}
      {signupStage === "resend_verification" && <ResendVerification />}
    </>
  );
};

export default Signup;
