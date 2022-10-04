import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchUserToken } from '../../../../https/storage';
import CustomAlert from '../../CustomAlert';
import logo from "../../../../static/images/logo.svg";
import { useAppSelector } from '../../redux/hooks';
import route from '../../../routes/route';

const Auth = () => {
    const { modal, modalType } = useAppSelector((state) => state.alert);
    const { pathname } = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (modalType === "" && pathname.includes("forgotpassword")) {
        if (pathname.includes("buyer")) {
          navigate(route.nonprotected.buyer.login);
        }
        if (pathname.includes("seller")) {
          navigate(route.nonprotected.seller.login);
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
  