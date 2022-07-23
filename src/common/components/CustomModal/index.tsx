import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Alerts} from '../../components/redux/alert/alertActions' 
import { useAppDispatch } from "../redux/hooks";
import { removeItem } from "../redux/tableItem";

type CustomModalProps = {
   children: JSX.Element|JSX.Element[];
   isModal: boolean;
   progress?: boolean;
   className?:string;
}

const CustomModal = ({children, isModal, progress, className}: CustomModalProps) => {
const dispatch = useAppDispatch()
  const [showModal, setModal] = useState(false)
  const {pathname} = useLocation();
  const navigate = useNavigate()

useEffect(()=>{
  if(isModal){
    setModal(true) 
  }else{
    setModal(false) 

  }
}, [isModal])

const closeModal = () => {
  dispatch(Alerts(""))
  dispatch(removeItem())
  setModal(false) 
  if (pathname.includes("forgotpassword")) {
    if (pathname.includes("buyer")) {
      navigate("/sigin/buyer")
    }
    if (pathname.includes("seller")) {
      navigate("/signin/seller")
    }
  }
}
  return (
<>
{showModal ? <div className="modal_container">
    <div className={`child_div ${className}`}>
{children}
    </div>
    <div className="modal_backdrop" onClick={() => !progress && closeModal()}></div>
  </div> : null}
  </> 
  );
};

export default CustomModal;
