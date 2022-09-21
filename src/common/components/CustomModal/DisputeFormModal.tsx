import React, { useEffect, useId, useRef, useState } from "react";
import img from "../../../static/images/unsplash.png";
import closemodal from "../../../static/images/dashboard_modal_close.svg";
import ArrowLeft from "../CustomIcons/ArrowLeft";
import CustomImageInput from "../CustomImageInput";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Alerts } from "../redux/alert/alertActions";
import CustomButton from "../CustomButtons";
import { Select, SelectItem } from "../CustomSelect";
import admin from "../../../modules/service/admin";
import CustomToast from "../CustomToast";
import { loadStart, loadStop } from "../redux/apploader";
import customToast from "../CustomToast";

export type IcreateDispute = {
  seller: string;
  buyer: string;
  transaction: string;
  dispute_reason: string;
  images: Array<string>;
  quantity: string;
  moreInfomation: string;
};

const initialState = {
  seller: "",
  buyer: "",
  transaction: "",
  dispute_reason: "",
  quantity: "",
  moreInfomation: "",
  images: [],
};

const quantityArr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
const reasonArr = [
  "Item received was broken or defective",
  "Fish received was broken or defective",
  "Tab received was broken or defective",
  "Fake received was broken or defective",
  "Gold received was broken or defective",
  "Sillver received was broken or defective",
  "Bronze received was broken or defective",
];

function DisputeFormModal() {
  const id = useId();
  const [inputs, setInputs] = useState<IcreateDispute>(initialState);
  const mountOnce = useRef(false);
  const transactionItem = useAppSelector((state) => state.tableItem.itm);
  const [imgUpload, setImgUpload] = useState({ loading: false, rawImages: [] });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if ((mountOnce.current = true)) {
      return;
    }
    setInputs((prev) => ({
      ...prev,
      seller: transactionItem.seller,
      buyer: transactionItem.buyer,
      transaction: transactionItem.id,
    }));

    mountOnce.current = true;
  }, []); //eslint-disable-line

  const emptyInput =
    Object.values(inputs).includes("") || inputs.images.length === 0;

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const selectChangeHandler = (value: string, type: "quantity" | "reason") => {
    setInputs((prev) => ({ ...prev, [type]: value }));
  };

  const addImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files.length) {
      setImgUpload((prev) => ({
        ...prev,
        loading: !prev.loading,
        rawImages: [...prev.rawImages, "placeholderimage"],
      }));
      admin
        .uploadImage(files)
        .then((res) => {
          const rmPlaceholderImg = imgUpload.rawImages.filter(
            (img) => img !== "placeholderimg"
          );
          setImgUpload((prev) => ({
            ...prev,
            rawImages: [...rmPlaceholderImg, files.item(0)],
          }));
          setInputs((prev) => ({
            ...prev,
            images: [...prev.images, res.response.data.key],
          }));
        })
        .catch((err) => {
          const rmPlaceholderImg = imgUpload.rawImages.filter(
            (img) => img !== "placeholderimg"
          );
          setImgUpload((prev) => ({
            ...prev,
            rawImages: [...rmPlaceholderImg],
          }));
          CustomToast(err.message, true);
        })
        .finally(() =>
          setImgUpload((prev) => ({
            ...prev,
            loading: !prev.loading,
          }))
        );
    }
  };
  const removeImageHandler = (file: any, index: number) => {
    const rawtemp = imgUpload.rawImages.filter(
      (img) => img.lastModified !== file.lastModified
    );
    const inputtemp = inputs.images.filter((img, id) => id !== index);
    setImgUpload((prev) => ({
      ...prev,
      rawImages: [...rawtemp],
    }));
    setInputs((prev) => ({ ...prev, images: [...inputtemp] }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loadStart());
    admin
      .createDispute(inputs)
      .then((res) => {
        dispatch(Alerts("disputesubmitted"));
      })
      .catch((err) => {
        dispatch(Alerts(""));
        customToast(err.message, true);
      })
      .finally(() => dispatch(loadStop()));
  };

  return (
    <form onSubmit={submitHandler} className=" disputemodal">
      <header className="disputemodal--head">
        <div className="head">
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(Alerts("transactionitem"));
            }}
          >
            <ArrowLeft />
          </div>
          <h4 className="modal__title">Dispute Transaction</h4>
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
        <section className="dispute_form">
          <div className="form_row">
            <div className="form_group">
              <label htmlFor={`${id}-reason`}>Select a reason</label>
              <div>
                <Select
                  name="dispute_reason"
                  id={`${id}-reason`}
                  value={inputs.dispute_reason}
                  onChange={(e) => selectChangeHandler(e, "reason")}
                  className="select-trigger"
                  placeholder="Please select a reason"
                >
                  {reasonArr.map((rsn) => (
                    <SelectItem key={rsn} value={rsn}>
                      {rsn}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-quantityr`}>Quantity</label>
              <div>
                <Select
                  name="quantity"
                  id={`${id}-quantityr`}
                  value={inputs.quantity}
                  onChange={(e) => selectChangeHandler(e, "quantity")}
                  // default="0"
                  className="select-trigger"
                  placeholder="0"
                >
                  {quantityArr.map((qty) => (
                    <SelectItem key={qty} value={qty}>
                      {qty}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label htmlFor={`${id}-more_info`}>More Information</label>
              <textarea
                required
                autoComplete="off"
                className="dispute_form_input"
                id={`${id}-more_info`}
                placeholder="For “change of mind” or “size wrong fit” reasons; item should be unusedwith all labels/tags and original brand packaging. For electronics the item must be sealed."
                name="moreInfomation"
                value={inputs.moreInfomation}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <CustomImageInput
                placeholder="No file Chosen"
                value={imgUpload.rawImages}
                changeHandler={addImageHandler}
                deleteHandler={removeImageHandler}
                label="Attach Evidence"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__body">
            <div className="section__body--itm">
              <div className="section__body--itm__wrapper">
                <h6 className="section__body--itm__title">Seller ID/Email</h6>
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
                  Seller Phone Number
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
      <footer className="disputemodal--foot">
        <CustomButton
          type="button"
          actionText="Submit Dispute"
          action={() => null}
          disabled={emptyInput}
        />
      </footer>
    </form>
  );
}

export default DisputeFormModal;
