import React from "react";
import CustomButton from "../CustomButtons";
import closemodal from "../../../static/images/modal_close.svg";
import CustomModal from "../CustomModal";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import TransactionModal from "../CustomModal/TransactionModal";
import ReasonFormModal from "../CustomModal/ReasonFormModal";
import NewTransaction from "../DashboardComponents/NewTransaction";
import DisputeModal from "../CustomModal/DisputeModal";
import PaymentFormModal from "../CustomModal/PaymentFormModal";
import DeliveryRatingForm from "../CustomModal/DeliveryRatingForm";
import DisputeFormModal from "../CustomModal/DisputeFormModal";
import { modalContentProps } from "./types";
import { modalClassName } from "../../utils/helpers";

const ModalContent = (props: modalContentProps) => {
  const { type, alertIcon, header, opt, text } = props;
  const { progress, finishBtn, confirmBtn, alertForm } = props;
  const { actionRight, actionLeft, onSubmit } = props;

  const { isloading } = useAppSelector((state) => state.isloading);
  const dispatch = useAppDispatch();
  const handleCloseBtn = () => dispatch(Alerts(""));

  const alertClassName = () =>
    `${confirmBtn ? "with-confirmbtn" : ""} ${
      alertForm === "feedback" ? "with-feedback" : ""
    } ${finishBtn ? "with-finishbtn" : ""} ${
      alertForm === "payment" ? "with-payment" : ""
    } ${alertForm === "rating" ? "with-rating" : ""} 
    ${progress ? "with-progress" : ""}`;

  return (
    <CustomModal
      className={`${modalClassName(type)} cover_screen`}
      progress={progress || isloading}
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
                {alertForm === "payment" && "Pay "}
                {header} {opt && <span>(optional)</span>}
              </h3>
              {!alertForm && <p>{text}</p>}
              {alertForm === "feedback" && (
                <ReasonFormModal
                  placeHolder={text}
                  onSubmitHandler={onSubmit}
                />
              )}
              {alertForm === "payment" && <PaymentFormModal />}
              {alertForm === "rating" && <DeliveryRatingForm />}

              {finishBtn ? (
                <CustomButton
                  className="alert_modal_btn"
                  action={actionLeft ? actionLeft : handleCloseBtn}
                  actionText="Done"
                />
              ) : null}

              {confirmBtn ? (
                <div className="confirmation_btn_div">
                  <CustomButton
                    className="cancel_btn"
                    variant="OUTLINE"
                    action={actionLeft}
                    actionText="Cancel"
                    disabled={isloading}
                  />
                  <CustomButton
                    className="confirm_btn"
                    action={actionRight}
                    actionText="Confirm"
                    loading={isloading}
                    disabled={isloading}
                  />
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </>
      <>{type === "transactionitem" ? <TransactionModal /> : null}</>
      <>{type === "disputeitem" ? <DisputeModal /> : null}</>
      <>{type === "disputeform" ? <DisputeFormModal /> : null}</>
      <>{type === "newtransaction" ? <NewTransaction /> : null}</>
    </CustomModal>
  );
};

export default ModalContent;
