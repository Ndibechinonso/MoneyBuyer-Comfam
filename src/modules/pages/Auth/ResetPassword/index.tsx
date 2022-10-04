import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children: ReactNode;
};

function ResetPassword({ children }: Props) {
  return (
    <div className="resetpassword_container">
      <header className="resetpassword_title">
        <h3>PASSWORD RESET</h3>
        <p>Enter your email address to reset password</p>
      </header>

      <div className="seller_container">{children}</div>
    </div>
  );
}

export default ResetPassword;
