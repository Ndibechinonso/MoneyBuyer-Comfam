import CustomButton from "../customButtons";
import closemodal from "../../../static/images/modal_close.svg";
import { useEffect, useState } from "react";


type CustomModalProps = {
   children: JSX.Element|JSX.Element[];
   isModal: boolean;
   progress?: any
}

const CustomModal = ({children, isModal, progress}: CustomModalProps) => {

  const [showModal, setModal] = useState(false)

useEffect(()=>{
  if(isModal){
    setModal(true) 
  }else{
    setModal(false) 

  }
}, [isModal])

const closeModal = () => {
  setModal(false) 
}
  return (
//     <>
//   { isModal ? (<div className="modal_container">
//       <div>
// {children}
//       </div>
//     </div>) : null}</>
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
