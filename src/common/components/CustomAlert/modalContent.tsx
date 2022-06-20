import CustomButton from "../customButtons";
import closemodal from "../../../static/images/modal_close.svg";
import CustomModal from "../CustomModal";
import { useState } from "react";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import TransactionModal from "../CustomModal/TransactionModal";
import ReasonFormModal from "../CustomModal/ReasonFormModal";

type modalContentProps = {
  type?: "alert" | "transactionItem";
  alertIcon?: any;
  header?: String;
  text?: String;
  progress?: any;
  confirmTransaction?: any;
  cancelTransaction?: any;
  cancelConfirmation?:  any;
  textArea?:any;
  singleAction?:any;
};

const ModalContent = ({
  type,
  alertIcon,
  header,
  text,
  progress,
  cancelConfirmation,
  confirmTransaction,
  cancelTransaction,
  singleAction,
  textArea,
}: modalContentProps) => {
  const [isModal, setModal] = useState(true);
  const direction = useAppSelector(state => state.alert.modalDirection)
  const dispatch = useAppDispatch();
  
  
  return (
    <CustomModal
      className={`${
        type === "transactionItem" ? "transactionModal__wrapper" : ""
      }`}
      progress={progress}
      isModal={isModal}
    >
      <>
        {type === "alert" ? (
          <div className="modal_content">
            <div className="modal_header">
              {!progress ? (
                <img
                  src={closemodal}
                  alt="close modal"
                  onClick={() => {
                    setModal(false);
                    dispatch(Alerts(""));
                  }}
                  className="cursor-pointer"
                />
              ) : null}
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
              <h3 className={`${header === "Reason"? "selfStart" :""}`}>{header}</h3>
              {!textArea && <p>{text}</p>}
              {
                textArea && <ReasonFormModal placeHolder={text} />
              }
              {alertIcon && singleAction ? (
                <CustomButton
                  className="alert_modal_btn"
                  action={() => dispatch(Alerts(""))}
                  actionText="Done"
                />
              ) : null}
              {/* {alertIcon && confirmTransaction ? (
                <CustomButton
                  className="alert_modal_btn"
                  action={() => dispatch(Alerts(""))}
                  actionText="Done"
                />
              ) : null} */}

              { confirmTransaction ? (
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
              {  cancelConfirmation ? (
                <div className="confirmation_btn_div">
                  <CustomButton
                    className="cancel_btn"
                    action={() => console.log("cancel")}
                    actionText="Cancel"
                  />{" "}
                  <CustomButton
                    className="confirm_btn"
                    action={() => dispatch(Alerts("cancelreason"))}
                    actionText="Confirm"
                  />{" "}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </>
      <>{type === "transactionItem" ? <TransactionModal /> : null}</>
    </CustomModal>
  );
};

export default ModalContent;
