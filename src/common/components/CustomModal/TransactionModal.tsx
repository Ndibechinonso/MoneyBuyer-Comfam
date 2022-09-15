import { useEffect, useRef, useState } from "react";
import admin from "../../../modules/service/admin";
import {
  confamFeesCalc,
  removeHypen,
  toNaira,
  transactionModalTitleHandler,
} from "../../utils/helpers";
import CustomButton from "../CustomButtons";
import CloseIcon from "../CustomIcons/CloseIcon";
import IndicatorIcon from "../CustomIcons/IndicatorIcon";
import ThreeDotIcon from "../CustomIcons/ThreeDot";
import Tag from "../CustomTags";
// import SellerTag from "../customTags/SellerTags";
// import img from "../../../static/images/unsplash.png";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function TransactionModal() {
  const data = useAppSelector((state) => state.tableItem.itm);
  const [images, setImages] = useState([]);
  const runOnce = useRef(false);
  const dispatch = useAppDispatch();

  const { totalPrice: price, transactionCost: cost } = confamFeesCalc(
    data.price,
    data.quantity
  );

  const totalPrice = price.toString();
  const transactionCost = cost.toString();

  useEffect(() => {
    if (runOnce.current) {
      return;
    }
    data.images.forEach((imageKey: string) => {
      admin
        .getImage(imageKey)
        .then((res) => setImages((prev) => [...prev, res]))
        .catch((err) => console.log(err));
    });
    runOnce.current = true;
  }, []); 

  return (
    <>
      <div className="transactionModal">
        <div
          className={`transactionModal__title transactionModal__title--${data?.status.toLocaleLowerCase()}`}
        >
          <IndicatorIcon />
          <span>{transactionModalTitleHandler(data)}</span>
        </div>
        <div className="transactionModal__body">
          <div className="transactionModal__body--head">
            <h4>Transaction Details</h4>
            <Tag value={data?.status} />
            <ThreeDotIcon />
          </div>
          <section className="section">
            <div className="section__head">
              <h5 className="section__head--title">Seller’s Information</h5>
              {(removeHypen(data?.status) === "completed" ||
                removeHypen(data?.status) === "cancelled") && (
                <p className="section__head--date">
                  {data?.transactionDetails?.buyerInfo?.paymentDueDate}
                </p>
              )}
            </div>
            <div className="section__body">
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Seller ID/Email</h6>
                <p className="section__body--itm__body">{data?.seller}</p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Payment Due Date</h6>
                <p className="section__body--itm__body">
                  {new Date(data?.completionDueDate).toDateString()}
                </p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">
                  Seller Phone Number
                </h6>
                <p className="section__body--itm__body">{data?.seller}</p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Delivery Address</h6>
                <p className="section__body--itm__body">
                  {data.deliveryAddress}
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="section__head">
              <h5 className="section__head--title">Product Information</h5>
            </div>
            <div className="section__body">
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Product Name</h6>
                <p className="section__body--itm__body">{data.productName}</p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Product Image</h6>
                <div className="section__body--itm__body section__body--itm_img">
                  {images.map((image, idx) => (
                    <img key={idx} src={image} alt={`product ${idx + 1}`} />
                  ))}
                </div>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Product Quantity</h6>
                <p className="section__body--itm__body">{data.quantity}</p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">
                  Product Description
                </h6>
                <p className="section__body--itm__body transactionModal__productDesc">
                  {data.description}
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="section__head">
              <h5 className="section__head--title">Pricing & Payments</h5>
            </div>
            <div className="section__body transactionModal__payment">
              <div className="transactionModal__payment--cost">
                <h6 className="transactionModal__payment--cost__title">
                  Product Cost
                </h6>
                <p className="transactionModal__payment--cost__body">
                  {toNaira(totalPrice)}
                </p>
              </div>
              <div className="transactionModal__payment--fee">
                <h6 className="transactionModal__payment--fee__title">
                  Transaction Fee
                </h6>
                <p className="transactionModal__payment--fee__body">
                  {toNaira(transactionCost)}
                </p>
              </div>
              <div className="transactionModal__payment--total">
                <div className="transactionModal__payment--totalSub">
                  <h6 className="transactionModal__payment--totalSub__title">
                    Sub total
                  </h6>
                  <p className="transactionModal__payment--totalSub__body">
                    {`${toNaira(totalPrice)} + ${toNaira(
                      transactionCost
                    )} Transaction fee`}
                  </p>
                </div>
                <div className="transactionModal__payment--totalCost">
                  <h6 className="transactionModal__payment--totalCost__title">
                    Total cost
                  </h6>
                  <p className="transactionModal__payment--totalCost__body">
                    {toNaira((price + cost).toString())}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {removeHypen(data?.status) === "pending delivery" && (
            <CustomButton
              actionText="Completed"
              action={() => dispatch(Alerts("confirmtransaction"))}
            />
          )}
          {removeHypen(data?.status) === "awaiting confirmation" && (
            <CustomButton
              actionText="Cancel transaction"
              action={() => dispatch(Alerts("canceltransaction"))}
            />
          )}
          {removeHypen(data?.status) === "pending confirmation" && (
            <div className="btnWrapper">
              <CustomButton
                variant="OUTLINE"
                actionText="Reject Transcation"
                action={() => dispatch(Alerts("canceltransaction"))}
              />
              <CustomButton
                actionText="Accept Transaction"
                action={() => dispatch(Alerts("confirmtransaction"))}
              />
            </div>
          )}
        </div>
      </div>
      <CloseIcon />
    </>
  );
}

export default TransactionModal;
