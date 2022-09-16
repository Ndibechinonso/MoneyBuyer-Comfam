import CustomButton from "../CustomButtons";
import closemodal from "../../../static/images/modal_close.svg";
import CustomModal from "../CustomModal";
import React, { useState } from "react";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch } from "../redux/hooks";
import TransactionModal from "../CustomModal/TransactionModal";
import ReasonFormModal from "../CustomModal/ReasonFormModal";
import NewTransaction from "../DashboardComponents/NewTransaction";
import DisputeModal from "../CustomModal/DisputeModal";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentFormModal from "../CustomModal/PaymentFormModal";
type modalContentProps = {
  type?: "alert" | "transactionitem" | "newtransaction" | "disputeitem";
  alertIcon?: any;
  header?: String;
  text?: String;
  progress?: any;
  confirmBtn?: any;
  actionLeft?: () => void;
  actionRight?: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  finishBtn?: any;
  opt?: any;
  alertForm?: "feedback" | "payment";
  emojiForm?: any;
};

const ModalContent = ({
  type,
  alertIcon,
  header,
  opt,
  text,
  progress,
  finishBtn,
  confirmBtn,
  actionLeft,
  actionRight,
  alertForm,
  onSubmit,
}: modalContentProps) => {
  const [isModal, setModal] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const direction = useAppSelector(state => state.alert.modalDirection)
  const dispatch = useAppDispatch();
  const handleCloseBtn = () => {
    setModal(false);
    dispatch(Alerts(""));
    if (pathname.includes("forgotpassword")) {
      if (pathname.includes("buyer")) {
        navigate("/sigin/buyer");
      }
      if (pathname.includes("seller")) {
        navigate("/signin/seller");
      }
    }
  };

  const alertClassName = () =>
    `${confirmBtn ? "with-confirmbtn" : ""} ${
      alertForm === "feedback" ? "with-feedback" : ""
    } ${finishBtn ? "with-finishbtn" : ""} ${
      alertForm === "payment" ? "with-payment" : ""
    }`;

  const modalClassName = (type: string) => {
    let className: string;

    switch (type) {
      case "transactionitem":
        className = "transactionModal__wrapper";
        break;
      case "alert":
        className = "alertModal__wrapper";
        break;
      case "disputeitem":
        className = "dispute__wrapper";
        break;
      case "newtransaction":
        className = "newtransaction__wrapper";
        break;

      default:
        className = "";
        break;
    }

    return className;
  };

  return (
    <CustomModal
      className={`${modalClassName(type)} cover_screen`}
      progress={progress}
      isModal={isModal}
    >
      <>
        {type === "alert" ? (
          <div className={`modal_content ${alertClassName()}`}>
            <div className="modal_header">
              {!progress ? (
                <button onClick={handleCloseBtn}>
                  <img
                    src={closemodal}
                    alt="close modal"
                    className="cursor-pointer"
                  />
                </button>
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
              <h3 className={`${header === "Reason" ? "selfStart" : ""}`}>
                {alertForm === "payment" && "Pay"}
                {header} {opt && <span>(optional)</span>}
              </h3>
              {!alertForm && (
                // <p style={{ maxWidth: "320px", textAlign: "center" }}>{text}</p>
                <p>{text}</p>
              )}
              {alertForm === "feedback" && (
                <ReasonFormModal
                  placeHolder={text}
                  onSubmitHandler={onSubmit}
                />
              )}
              {alertForm === "payment" && <PaymentFormModal />}

              {finishBtn ? (
                <CustomButton
                  className="alert_modal_btn"
                  action={() => dispatch(Alerts(""))}
                  actionText="Done"
                />
              ) : null}

              {confirmBtn ? (
                <div className="confirmation_btn_div">
                  <CustomButton
                    className="cancel_btn"
                    action={actionLeft}
                    actionText="Cancel"
                  />
                  <CustomButton
                    className="confirm_btn"
                    action={actionRight}
                    actionText="Confirm"
                  />
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </>
      <>{type === "transactionitem" ? <TransactionModal /> : null}</>
      <>{type === "disputeitem" ? <DisputeModal /> : null}</>
      <>{type === "newtransaction" ? <NewTransaction /> : null}</>
    </CustomModal>
  );
};

export default ModalContent;
