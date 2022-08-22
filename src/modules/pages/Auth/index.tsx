import { Navigate, Outlet } from "react-router-dom";
import logo from "../../../static/images/logo.svg";
import { useAppSelector } from "../../../common/components/redux/hooks";
import CustomAlert from "../../../common/components/CustomAlert";
import { fetchUserToken } from "../../../https/storerage";

const Auth = () => {
  const { modal, modalType } = useAppSelector((state) => state.alert);

  if (fetchUserToken()) {
    return <Navigate replace to="/dashboard" />
  }

  return (
    <>
      {modal && <CustomAlert alertType={modalType} />}
      <div className="auth_container">
        <div className="logo_div">
          <img src={logo} alt="" />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Auth;
