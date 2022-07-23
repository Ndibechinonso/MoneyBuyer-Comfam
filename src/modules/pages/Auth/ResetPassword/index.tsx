import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

function ResetPassword({}: Props) {
  return (
    <div className="resetpassword_container">
      <header className="resetpassword_title">
        <h3>PASSWORD RESET</h3>
        <p>Enter your email address to reset password</p>
      </header>

      <div className="seller_container">
        <Outlet />
      </div>
    </div>
  );
}

export default ResetPassword;
