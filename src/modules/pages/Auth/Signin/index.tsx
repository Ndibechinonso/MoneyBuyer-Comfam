import React, { ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

type props = {
  children: ReactNode;
};

const Signin = ({ children }: props) => {

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
            BUYER
          </NavLink>
        </li>

        <li>
        <a href="">
              SELLER
            </a>
        </li>
      </ul>
      <div className="seller_container">
        {children}
        <Link
          className="signin_forgotpassword_link"
          to={`/forgotpassword/buyer`}
        >
          Forgot Password?
        </Link>
      </div>
      <p className="signin_link_div">
        Don't have an account?{" "}
        <Link to={`/signup/buyer`}>
          <span className="signup_link">Sign Up</span>
        </Link>
      </p>
    </div>
  );
}

export default Signin;
