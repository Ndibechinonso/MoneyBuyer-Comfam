import CustomButton from "../customButtons";
import closemodal from "../../../static/images/modal_close.svg";
import { useEffect, useState } from "react";
import {Alerts} from '../../components/redux/alert/alertActions' 
import { useAppDispatch } from "../redux/hooks";

type CustomModalProps = {
   children: JSX.Element|JSX.Element[];
   isModal: boolean;
   progress?: boolean
}

const CustomModal = ({children, isModal, progress}: CustomModalProps) => {
const dispatch = useAppDispatch()
  const [showModal, setModal] = useState(false)

useEffect(()=>{
  if(isModal){
    setModal(true) 
  }else{
    setModal(false) 

  }
}, [isModal])

const closeModal = () => {
  dispatch(Alerts(""))
  setModal(false) 
}
  return (
<>
{showModal ? <div className="modal_container">
    <div className="child_div">
{children}
    </div>
    <div className="modal_backdrop" onClick={() => !progress && closeModal()}></div>
  </div> : null}
  </> 
  );
};

export default CustomModal;
