import CustomButton from "../customButtons";
import closemodal from "../../../static/images/modal_close.svg";
import CustomModal from "../CustomModal";
import { useState } from "react";

type alertModalProps = {
  type?: String;
  alertIcon?: any;
  header?: String;
  text?: String;
  progress?: any;
  confirmTransaction?: any;
  cancelTransaction?: any;

};

const AlertModal = ({
  type,
  alertIcon,
  header,
  text,
  progress,
  confirmTransaction,
  cancelTransaction
}: alertModalProps) => {

    const [isModal, setModal] = useState(true)

  return (
    <CustomModal progress={progress} isModal={isModal}>
      <div className="modal_content">
        {type === "alert" ? (
          <>
            <div className="modal_header">
              {!progress ? <img src={closemodal} alt="close modal" onClick={() => {setModal(false)}} className="cursor-pointer" /> : null}
            </div>
            <div className="modal_body">
              {alertIcon && (
                <div>
                  <img src={alertIcon} alt="success" />
                </div>
              )}
              {progress && (
                <div className="lds-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
              <h3>{header}</h3>
              <p>{text}</p>
              {alertIcon && (confirmTransaction || cancelTransaction) ? (
                <CustomButton
                  className="alert_modal_btn"
                  action={() => console.log("success")}
                  actionText="Done"
                />
              ) : null}

              {confirmTransaction || cancelTransaction ? (
                <div className="confirmation_btn_div">
                  <CustomButton
                    className="cancel_btn"
                    action={() => console.log("cancel")}
                    actionText="Cancel"
                  />{" "}
                  <CustomButton
                    className="confirm_btn"
                    action={() => console.log("confirm")}
                    actionText="Confirm"
                  />{" "}
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </CustomModal>
  );
};

export default AlertModal;
