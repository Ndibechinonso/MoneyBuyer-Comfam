import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../common/components/redux/hooks";
import CustomAlert from "../../../common/components/CustomAlert";
import logo from "../../../static/images/logo.svg";
import { fetchUserToken } from "../../../https/storage";

const Auth = () => {
  const { modal, modalType } = useAppSelector((state) => state.alert);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (modalType === "" && pathname.includes("forgotpassword")) {
      if (pathname.includes("buyer")) {
        navigate("/sigin/buyer");
      }
      if (pathname.includes("seller")) {
        navigate("/signin/seller");
      }
    }
  }, [modalType]);

  if (fetchUserToken()) {
    return <Navigate replace to="/dashboard" />;
  }
  return (
    <>
      {modal && <CustomAlert alertType={modalType} />}
      <div className="auth_container">
        <div className="logo_div">
          <img src={logo} alt="confam money logo" />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Auth;
