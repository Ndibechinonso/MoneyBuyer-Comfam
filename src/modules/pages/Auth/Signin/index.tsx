import React, { ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

type props = {
  children: ReactNode;
};

function Signin({ children }: props) {
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
    <div className="signup_container">
      <h3>SIGN IN INTO YOUR ACCOUNT</h3>

      <ul className="signup_container_tabs">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "signup_container_active_tab" : ""
            }
            to={"/signin/buyer"}
          >
            BUYER{" "}
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "signup_container_active_tab" : ""
            }
            to={"/signin/seller"}
          >
            {" "}
            SELLER
          </NavLink>
        </li>
      </ul>
      <div className="seller_container">
        {children}
        <Link
          className="signin_forgotpassword_link"
          to={`/forgotpassword/${getAppPath(pathname)}`}
        >
          Forgot Password?
        </Link>
      </div>
      <p className="signin_link_div">
        Don't have an account?{" "}
        <Link to={`/signup/${getAppPath(pathname)}`}>
          <span className="signup_link">Sign Up</span>
        </Link>
      </p>
    </div>
  );
}

export default Signin;
