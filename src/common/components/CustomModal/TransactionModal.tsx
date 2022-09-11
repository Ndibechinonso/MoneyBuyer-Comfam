import CustomButton from "../CustomButtons";
import CloseIcon from "../CustomIcons/CloseIcon";
import IndicatorIcon from "../CustomIcons/IndicatorIcon";
import ThreeDotIcon from "../CustomIcons/ThreeDot";
import SellerTag from "../CustomTags/SellerTags";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function TransactionModal() {
  const data = useAppSelector((state) => state.tableItem.itm);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="transactionModal">
        <div
          className={`transactionModal__title transactionModal__title--${data?.status
            .split(" ")
            .join("-")}`}
        >
          <IndicatorIcon />
          <span>
            {data?.status === "Awaiting confirmation"
              ? "Awaiting Buyer’s confirmation"
              : null}
            {data?.status === "Awaiting payment"
              ? `Transaction has been accepted, awiating the payment of ${data?.amount}`
              : null}
            {data?.status === "Cancelled"
              ? `This transaction has been cancelled`
              : null}
            {data?.status === "Pending confirmation"
              ? `Pending Seller’s confirmation`
              : null}
            {data?.status === "Pending delivery"
              ? `This Transaction is Pending delivery`
              : null}
            {data?.status === "Completed"
              ? `This Transaction has been completed`
              : null}
            {data?.status === "Awaiting delivery"
              ? `This Transaction is Awaiting buyers’ to confirm delivery`
              : null}
          </span>
        </div>
        <div className="transactionModal__body">
          <div className="transactionModal__body--head">
            <h4>Transaction Details</h4>
            <SellerTag value={data?.status} />
            <ThreeDotIcon />
          </div>
          <section className="section">
            <div className="section__head">
              <h5 className="section__head--title">Buyer’s Information</h5>
              {(data?.status === "Completed" ||
                data?.status === "Cancelled") && (
                <p className="section__head--date">
                  {data?.transactionDetails?.buyerInfo?.paymentDueDate}
                </p>
              )}
            </div>
            <div className="section__body">
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Buyer ID/Email</h6>
                <p className="section__body--itm__body">
                  {data?.transactionDetails?.buyerInfo?.email}
                </p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Payment Due Date</h6>
                <p className="section__body--itm__body">
                  {data?.transactionDetails?.buyerInfo?.paymentDueDate}
                </p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">
                  Buyer Phone Number
                </h6>
                <p className="section__body--itm__body">
                  {data?.transactionDetails?.buyerInfo?.phoneNumber}
                </p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Delivery Address</h6>
                <p className="section__body--itm__body">
                  {data?.transactionDetails?.buyerInfo?.deliveryAddress}
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
                <p className="section__body--itm__body">
                  {data?.transactionDetails?.productInfo?.productName}
                </p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Product Image</h6>
                <p className="section__body--itm__body">
                  <img
                    src={data?.transactionDetails?.productInfo?.productImage}
                    alt="displayed product"
                  />
                </p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">Product Quantity</h6>
                <p className="section__body--itm__body">
                  {data?.transactionDetails?.productInfo?.productQuantity}
                </p>
              </div>
              <div className="section__body--itm">
                <h6 className="section__body--itm__title">
                  Product Description
                </h6>
                <p className="section__body--itm__body transactionModal__productDesc">
                  {data?.transactionDetails?.productInfo?.productDesc}
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
                  {/* <span>₦</span>12,500 */}
                  {data?.transactionDetails?.pricingAndPayment?.productCost}
                </p>
              </div>
              <div className="transactionModal__payment--fee">
                <h6 className="transactionModal__payment--fee__title">
                  Transaction Fee
                </h6>
                <p className="transactionModal__payment--fee__body">
                  {/* <span>₦</span>1,000 */}
                  {data?.transactionDetails?.pricingAndPayment?.transactionFee}
                </p>
              </div>
              <div className="transactionModal__payment--total">
                <div className="transactionModal__payment--totalSub">
                  <h6 className="transactionModal__payment--totalSub__title">
                    Sub total
                  </h6>
                  <p className="transactionModal__payment--totalSub__body">
                    {/* <span>₦</span>12,500 + <span>₦</span>1,000 Transaction fee */}
                    {data?.transactionDetails?.pricingAndPayment?.subTotal}
                  </p>
                </div>
                <div className="transactionModal__payment--totalCost">
                  <h6 className="transactionModal__payment--totalCost__title">
                    Total cost
                  </h6>
                  <p className="transactionModal__payment--totalCost__body">
                    {/* <span>₦</span>13,500 */}
                    {data?.transactionDetails?.pricingAndPayment?.totalCost}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {data?.status === "Pending delivery" && (
            <CustomButton
              actionText="Completed"
              action={() => dispatch(Alerts("confirmtransaction"))}
            />
          )}
          {data?.status === "Awaiting confirmation" && (
            <CustomButton
              actionText="Cancel transaction"
              action={() => dispatch(Alerts("canceltransaction"))}
            />
          )}
          {data?.status === "Pending confirmation" && (
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
