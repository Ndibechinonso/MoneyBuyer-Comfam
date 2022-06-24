import React from "react";
import img from "../../../static/images/unsplash.png";
import closemodal from "../../../static/images/dashboard_modal_close.svg";
import arrowLeft from "../../../static/images/arrow_left.svg";
import { useAppDispatch } from "../redux/hooks";
import { Alerts } from "../redux/alert/alertActions";

function DisputeModal() {
  const dispatch = useAppDispatch();
  return (
    <div className=" disputemodal">
      <header className="disputemodal--head">
        <div className="head">
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(Alerts(""));
            }}
          >
            <img src={arrowLeft} alt="go back" />
          </div>
          <h4 className="modal__title">Dispute Details</h4>
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
          <h5 className="modal__subtitle">Transaction Details</h5>
      </header>
      <section className="disputemodal--body">
        <section className="section">
            <div className="section__body">
            <div className="section__body--itm">
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">Dispute Reason</h6>
                <p className="section__body--itm__body">Item received was broken or defective</p>
              </div>
            </div>
            <div className="section__body--itm">
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">More Information</h6>
                <p className="section__body--itm__body transactionModal__productDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  nisl dui at id...........
                </p>
              </div>
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">Disputed Image</h6>
                <p className="section__body--itm__body">
                <img src={img} alt="dispute product" />
                </p>
              </div>
            </div>
            </div>
        </section>
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
                <h6 className="section__body--itm__title">Buyer ID/Email</h6>
                <p className="section__body--itm__body">Johnson@gmail.com</p>
              </div>
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">Product Name</h6>
                <p className="section__body--itm__body">Laptop</p>
              </div>
            </div>
            <div className="section__body--itm">
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">Payment Due Date</h6>
                <p className="section__body--itm__body">24th Mar 2022</p>
              </div>
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">Product Image</h6>
                <p className="section__body--itm__body">
                  <img src={img} alt="displayed product" />
                </p>
              </div>
            </div>
            <div className="section__body--itm">
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">
                  Buyer Phone Number
                </h6>
                <p className="section__body--itm__body">+234-704-5432-12</p>
              </div>
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">Product Quantity</h6>
                <p className="section__body--itm__body">1</p>
              </div>
            </div>
            <div className="section__body--itm">
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">Delivery Address</h6>
                <p className="section__body--itm__body">
                  16A Adebayo Street, Lagos
                </p>
              </div>
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">
                  Product Description
                </h6>
                <p className="section__body--itm__body transactionModal__productDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  nisl dui at id...........
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          {/* <div className="section__head">
              <h5 className="section__head--title">Pricing & Payments</h5>
            </div> */}
          <div className="section__body transactionModal__payment">
            <div className="transactionModal__payment--cost">
              <h6 className="transactionModal__payment--cost__title">
                Product Cost
              </h6>
              <p className="transactionModal__payment--cost__body">
                <span>₦</span>12,500
                {/* {data?.transactionDetails?.pricingAndPayment?.productCost} */}
              </p>
            </div>
            <div className="transactionModal__payment--fee">
              <h6 className="transactionModal__payment--fee__title">
                Transaction Fee
              </h6>
              <p className="transactionModal__payment--fee__body">
                <span>₦</span>1,000
                {/* {data?.transactionDetails?.pricingAndPayment?.transactionFee} */}
              </p>
            </div>
            <div className="transactionModal__payment--total">
              <div className="transactionModal__payment--totalSub">
                <h6 className="transactionModal__payment--totalSub__title">
                  Sub total
                </h6>
                <p className="transactionModal__payment--totalSub__body">
                  <span>₦</span>12,500 + <span>₦</span>1,000 Transaction fee
                  {/* {data?.transactionDetails?.pricingAndPayment?.subTotal} */}
                </p>
              </div>
              <div className="transactionModal__payment--totalCost">
                <h6 className="transactionModal__payment--totalCost__title">
                  Total cost
                </h6>
                <p className="transactionModal__payment--totalCost__body">
                  <span>₦</span>13,500
                  {/* {data?.transactionDetails?.pricingAndPayment?.totalCost} */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default DisputeModal;
