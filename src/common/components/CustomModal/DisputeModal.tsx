import React, { useEffect, useRef, useState } from "react";
import img from "../../../static/images/unsplash.png";
import closemodal from "../../../static/images/dashboard_modal_close.svg";
import ArrowLeft from "../CustomIcons/ArrowLeft";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Alerts } from "../redux/alert/alertActions";
import CustomButton from "../CustomButtons";
import DisputeTracker from "./DisputeTraker";
import admin from "../../../modules/service/admin";
import Pulse from "../CustomIcons/Pulse";
import { formatCurrency } from "../../utils";

const DisputeModal = () => {
  const dispatch = useAppDispatch();
  const [display, setDisplay] = useState("Details");
  const { singleDispute } = useAppSelector((state) => state.disputes);
  const runUnmount = useRef(true);
  const [disputeImages, setDisputeImages] = useState([]);
  const [transactionImages, setTransactionDisputeImages] = useState([]);
  const [disputeImageLoader, setDisputeImageLoader] = useState(false);
  const [transactionImageLoader, setTransactionImageLoader] = useState(false);

  useEffect(() =>{
console.log(singleDispute, "singleDispute");
  }, [singleDispute])

  useEffect(() => {
    if (runUnmount.current) {
      runUnmount.current = false;
      return;
    }
    setDisputeImageLoader(true);
    singleDispute?.images?.forEach((imageKey: string) => {
      admin
        .getImage(imageKey)
        .then((res) => setDisputeImages((prev) => [...prev, res]))
        .catch((err) => console.log(err))
        .finally(() => setDisputeImageLoader(false));
    });

    setTransactionImageLoader(true)

    singleDispute?.transaction?.images?.forEach((imageKey: string) => {
      admin
        .getImage(imageKey)
        .then((res) => setTransactionDisputeImages((prev) => [...prev, res]))
        .catch((err) => console.log(err))
        .finally(() => setTransactionImageLoader(false));
    });
  }, []);
  
  return (
    <div className="disputemodal">
      <header
        className={`disputemodal--head ${
          display === "Details" ? "border_bottom" : ""
        }`}
      >
        <div className="head">
          {display !== "trackPage" && (
            <div
              className="cursor-pointer"
              onClick={() => {
                display === "Details" ? dispatch(Alerts("")) : setDisplay("Details")
              }}
            >
              <ArrowLeft />
            </div>
          )}
          <h4
            className={`modal__title ${display === "Details" ? "m-auto" : ""}`}
          >
            Dispute {display}
          </h4>
          <div className="close_div">
            <img
              src={closemodal}
              alt="close modal"
              onClick={() => {
                dispatch(Alerts(""));
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
        {display !== "Tracker" && (
          <h5 className="modal__subtitle">Transaction Details</h5>
        )}
      </header>
      <section className="disputemodal--body">
        {display === "Tracker" && <DisputeTracker />}
        <section className="section">
          <div className="section__body">
            <div className="section__body--itm">
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">Dispute Reason</h6>
                <p className="section__body--itm__body">
                  {singleDispute?.dispute_reason}
                </p>
              </div>
            </div>
            <div className="section__body--itm__wrapper">
            <h6 className="section__body--itm__title">
                Disputed Image{disputeImages?.length > 1 && "s"}
              </h6>
              <div className="section__body--itm__body section__body--itm_img">
              {disputeImageLoader && <Pulse />}
              {disputeImages.filter((image, index) => index < 2).map((image, idx) => (
                    <div key={idx} className={`product_img_div ${idx === 1 && disputeImages.length > 2 ? "second_img" : ""}`}>
                  {idx === 1 && disputeImages.length > 2 && <><div className={`overlay`}>
                    </div> <p className="product_display_count">+ {disputeImages.length - 2}</p> </> }
                    <img  src={image} alt={`product ${idx + 1}`} />
                    </div>
                  ))}
                  </div>
            </div>
          </div>
          {display === "Tracker" && (
            <div className="text-right" style={{ marginTop: "2rem" }}>
              <CustomButton
                type="button"
                action={() => {
                  dispatch(Alerts(""));
                }}
                actionText="Done"
              />
            </div>
          )}
        </section>
        {display !== "Tracker" && (
          <>
            <section className="section">
              {/* <div className="section__head">
              <h5 className="section__head--title">Buyer’s Information</h5>
              {(data?.status === "Completed" ||
                data?.status === "Cancelled") && (
                <p className="section__head--date">
                  {data?.transactionDetails?.buyerInfo?.paymentDueDate}
                </p>
              )}
            </div> */}
              <div className="section__body">
                <div className="section__body--itm">
                  <div className="section__body--itm__wrapper">
                    <h6 className="section__body--itm__title">
                      Seller ID/Email
                    </h6>
                    <p className="section__body--itm__body">
                     {singleDispute?.seller?.email}
                    </p>
                  </div>
                  <div className="section__body--itm__wrapper">
                    <h6 className="section__body--itm__title">Product Name</h6>
                    <p className="section__body--itm__body">Laptop</p>
                  </div>
                </div>
                <div className="section__body--itm">
                  <div className="section__body--itm__wrapper">
                    <h6 className="section__body--itm__title">
                      Payment Due Date
                    </h6>
                    <p className="section__body--itm__body">24th Mar 2022</p>
                  </div>
                  <div className="section__body--itm__wrapper">
                  <h6 className="section__body--itm__title">
                  Product Image{transactionImages.length > 1 && "s"}
                </h6>
                <div className="section__body--itm__body section__body--itm_img">
                {transactionImageLoader && <Pulse />}
                {transactionImages.filter((image, index) => index < 2).map((image, idx) => (
                    <div key={idx} className={`product_img_div ${idx === 1 && transactionImages.length > 2 ? "second_img" : ""}`}>
                  {idx === 1 && transactionImages.length > 2 && <><div className={`overlay`}>
                    </div> <p className="product_display_count">+ {transactionImages.length - 2}</p> </> }
                    <img  src={image} alt={`product ${idx + 1}`} />
                    </div>
                  ))}
                </div>
                  </div>
                </div>
                <div className="section__body--itm">
                  <div className="section__body--itm__wrapper">
                    <h6 className="section__body--itm__title">
                      Seller Phone Number
                    </h6>
                    <p className="section__body--itm__body">{singleDispute?.seller?.phone_number}
</p>
                  </div>
                  <div className="section__body--itm__wrapper">
                    <h6 className="section__body--itm__title">
                      Product Quantity
                    </h6>
                    <p className="section__body--itm__body">{singleDispute?.transaction?.quantity}
</p>
                  </div>
                </div>
                <div className="section__body--itm">
                  <div className="section__body--itm__wrapper">
                    <h6 className="section__body--itm__title">
                      Delivery Address
                    </h6>
                    <p className="section__body--itm__body">
                    {singleDispute?.transaction?.deliveryAddress}
                    </p>
                  </div>
                  <div className="section__body--itm__wrapper">
                    <h6 className="section__body--itm__title">
                      Product Description
                    </h6>
                    <p className="section__body--itm__body transactionModal__productDesc">
                    {singleDispute?.transaction?.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              {/* <div className="section__head">
              <h5 className="section__head--title">Pricing & Payments</h5>
            </div> */}
              <div className="section__body transactionModal__payment text-left">
                <div className="flexRowBetween">
                  <div className="transactionModal__payment--cost">
                    <h6 className="transactionModal__payment--cost__title">
                      Product Cost
                    </h6>
                    <p className="transactionModal__payment--cost__body">
                    {formatCurrency(singleDispute?.transaction?.price, 2)}
                    </p>
                  </div>
                  <div className="transactionModal__payment--fee">
                    <h6 className="transactionModal__payment--fee__title">
                      Transaction Fee
                    </h6>
                    <p className="transactionModal__payment--fee__body">
                    {formatCurrency(
                    singleDispute?.transaction?.transactionFee,
                    2
                  )}
                    </p>
                  </div>
                </div>
                <div className="transactionModal__payment--total">
                  <div className="transactionModal__payment--totalSub">
                    <h6 className="transactionModal__payment--totalSub__title">
                      Sub total
                    </h6>
                    <p className="transactionModal__payment--totalSub__body">
                    {formatCurrency(singleDispute?.transaction?.price, 2)} +{" "}
                  {formatCurrency(
                    singleDispute?.transaction?.transactionFee,
                    2
                  )}{" "}
                  Transaction fee
                    </p>
                  </div>
                  <div className="transactionModal__payment--totalCost text-left">
                    <h6 className="transactionModal__payment--totalCost__title">
                      Total cost
                    </h6>
                    <p className="transactionModal__payment--totalCost__body">
                    {formatCurrency(
                    singleDispute?.transaction?.price +
                      (singleDispute?.transaction?.transactionFee || 0),
                    2
                  )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right" style={{ marginTop: "2rem" }}>
                <CustomButton
                  type="button"
                  action={() => {
                    setDisplay("Tracker");
                  }}
                  actionText="Track Dispute"
                />
              </div>
            </section>
          </>
        )}
      </section>
    </div>
  );
}

export default DisputeModal;
