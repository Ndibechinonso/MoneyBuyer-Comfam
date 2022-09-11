import { useState, useId } from "react";
// import CustomModal from "../../CustomModal";
import CustomButton from "../../CustomButtons";
import closemodal from "../../../../static/images/dashboard_modal_close.svg";
import ArrowLeft from "../../CustomIcons/ArrowLeft";
// import addProduct from "../../../../static/images/add_product.svg";
import info from "../../../../static/images/insurance_info.svg";
import { Alerts } from "../../../components/redux/alert/alertActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Product from "./Product";
import Service from "./Service";
import { confamFeesCalc, toNaira } from "../../../utils/helpers";
import Calender from "../../customDate";
import admin from "../../../../modules/service/admin";
import customtoast from "../../customToast";
import { loadStart, loadStop } from "../../redux/apploader";

const NewTransaction = () => {
  const id = useId();
  const { isloading } = useAppSelector((state) => state.isloading);
  const dispatch = useAppDispatch();
  const initialState = {
    type: "NEW_TRANSACTION",
    sellerDetails: {
      email: "kirtugoyde@vusra.com",
      phone_number: "08029326711",
    },
    ProductName: "Green",
    quantity: 2,
    description: "Clean and sleek",
    productModel: "X",
    images: [],
    completionDueDate: new Date().toISOString(),
    price: 3000,
    deliveryAddress: "Lagos",
    transactionFee: 1300,
    insuranceRequested: false,
  };

  const [inputs, setInputs] = useState(initialState);
  // const [startDate, setStartDate] = useState(new Date());
  const [rawImages, setRawImages] = useState([]);
  // const [productNumber, setProductNumber] = useState(1);
  // const [serviceNumber, setServiceNumber] = useState(1);

  // const changeFormState = (state: string) => {
  //   setHeaderTitle(state);
  // };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const regex = new RegExp("^[0-9]*$");
    const { name, value, files } = e.target;

    switch (name) {
      case "phone_number":
        if (regex.test(value)) {
          setInputs((prev) => ({
            ...prev,
            sellerDetails: { ...prev.sellerDetails, [name]: value },
          }));
        }
        break;
      case "email":
        setInputs((prev) => ({
          ...prev,
          sellerDetails: { ...prev.sellerDetails, [name]: value },
        }));
        break;
      case "insuranceRequested":
        setInputs((prev) => ({ ...prev, [name]: !prev[name] }));
        break;
      case "quantity":
      case "price":
        if (regex.test(value)) {
          setInputs((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
        break;
      case "images":
        if (files.length) {
          setRawImages((prev) => [...prev, files.item(0)]);
          admin
            .uploadImage(files.item(0))
            .then((res) =>
              setInputs((prev) => ({
                ...prev,
                images: [...prev.images, res.response.data.key],
              }))
            )
            .catch((err) => console.log(err));
        }
        break;
      default:
        setInputs((prev) => ({ ...prev, [name]: value }));
        break;
    }
  };

  const removeImageHandler = (file: any, index: number) => {
    const temp = rawImages.filter(
      (img) => img.lastModified !== file.lastModified
    );
    const temp1 = inputs.images.filter((img, id) => id !== index);
    setRawImages([...temp]);
    setInputs((prev) => ({ ...prev, images: [...temp1] }));
  };

  const dateChange = (date: Date) => {
    setInputs((prev) => ({
      ...prev,
      completionDueDate: date.toISOString(),
    }));
  };

  const changeType = (type: string) => {
    setInputs((prev) => ({ ...prev, type }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loadStart());
    admin
      .newTransaction(inputs)
      .then((res) => dispatch(Alerts("newtransactioncreated")))
      .catch((err) => customtoast(err.message, true))
      .finally(() => dispatch(loadStop()));
  };

  return (
    <section className="new_transaction_container">
      <header className="new_transaction_header">
        {inputs.type !== "NEW_TRANSACTION" ? (
          <button
            className="cursor-pointer"
            disabled={isloading}
            onClick={() => {
              setInputs(initialState);
            }}
          >
            <ArrowLeft />
          </button>
        ) : null}
        <div className="new_transaction_header_title">
          {inputs.type === "PRODUCT" && <h4>Product Purchase</h4>}
          {inputs.type === "SERVICE" && <h4>Service Purchase</h4>}
          {inputs.type === "NEW_TRANSACTION" && (
            <>
              <h4>New Transaction</h4>
              <p>Select one of the following options</p>
            </>
          )}
        </div>
        <button className="close_div">
          <img
            src={closemodal}
            alt="close modal"
            onClick={() => {
              // setModal(false);
              dispatch(Alerts(""));
            }}
            className="cursor-pointer"
          />
        </button>
      </header>

      <form onSubmit={submitHandler}>
        {inputs.type === "NEW_TRANSACTION" ? (
          <div className="transaction_cards_container">
            <div
              className="transaction_card cursor-pointer"
              onClick={() => {
                changeType("PRODUCT");
              }}
            >
              Product
            </div>
            <div
              className="transaction_card cursor-pointer"
              onClick={() => {
                changeType("SERVICE");
              }}
            >
              Service
            </div>
          </div>
        ) : null}
        {inputs.type === "PRODUCT" ? (
          <>
            <h5>Seller’s Information</h5>

            <div className="form_row">
              <div className="form_group">
                <label htmlFor={`${id}-buyer_email`}> Seller ID/ Email </label>
                <input
                  className="new_transaction_form_input"
                  id={`${id}-buyer_email`}
                  type="email"
                  name="email"
                  placeholder="james@email.com"
                  disabled={isloading}
                  value={inputs.sellerDetails.email}
                  onChange={changeHandler}
                />
              </div>

              <div className="form_group">
                <label htmlFor={`${id}-phoneNumber`}>Seller Phone Number</label>
                <input
                  className="new_transaction_form_input"
                  id={`${id}-phoneNumber`}
                  type="tel"
                  name="phone_number"
                  placeholder="070-123-432-11"
                  disabled={isloading}
                  value={inputs.sellerDetails.phone_number}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label htmlFor={`${id}-due_date`}> Payment Due Date </label>
                <Calender
                  onChange={dateChange}
                  disable={isloading}
                  type="picker"
                  startDate={new Date(inputs.completionDueDate)}
                />
              </div>
              <div className="form_group">
                <label htmlFor={`${id}-delivery_address`}>
                  Delivery Address
                </label>
                <input
                  className="new_transaction_form_input"
                  id={`${id}-delivery_address`}
                  type="text"
                  placeholder="Lagos Nigeria"
                  name="deliveryAddress"
                  disabled={isloading}
                  value={inputs.deliveryAddress}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <Product
              insuranceRequested={inputs.insuranceRequested}
              product_description={inputs.description}
              product_image={rawImages}
              product_name={inputs.ProductName}
              product_price={inputs.price}
              product_quantity={inputs.quantity}
              changeHandler={changeHandler}
              removeImageHandler={removeImageHandler}
            />
          </>
        ) : null}
        {inputs.type === "SERVICE" ? (
          <>
            <h5>Consultant Information</h5>

            <div className="form_row">xxx
              <div className="form_group">
                <label htmlFor={`${id}-consultant_email`}>
                  Consultant ID/Email
                </label>
                <input
                  className="new_transaction_form_input"
                  id={`${id}-consultant_email`}
                  type="text"
                  placeholder="Confam money ID or Email"
                  name="email"
                  disabled={isloading}
                  value={inputs.sellerDetails.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="form_group">
                <label htmlFor={`${id}-phoneNumber`}>
                  Consultant Phone Number
                </label>
                <input
                  className="new_transaction_form_input"
                  id={`${id}-phoneNumber`}
                  type="tel"
                  placeholder="e.g. 070-123-432-11"
                  name="phone_number"
                  disabled={isloading}
                  value={inputs.sellerDetails.phone_number}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="form_row">
              <div className="form_group">
                <label htmlFor={`${id}-due_date`}> Payment Due Date </label>
                <Calender
                  onChange={dateChange}
                  type="picker"
                  disable={isloading}
                  startDate={new Date(inputs.completionDueDate)}
                />
              </div>
              <div className="form_group">
                <label htmlFor={`${id}-delivery_address`}>
                  Delivery Address (Optional)
                </label>
                <input
                  className="new_transaction_form_input"
                  id={`${id}-delivery_address`}
                  type="text"
                  placeholder="e.g 18 Akoka, Lagos"
                  name="deliveryAddress"
                  disabled={isloading}
                  value={inputs.deliveryAddress}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <Service
              product_description={inputs.description}
              product_image={rawImages}
              product_name={inputs.ProductName}
              product_price={inputs.price}
              product_quantity={inputs.quantity}
              changeHandler={changeHandler}
              removeImageHandler={removeImageHandler}
            />
          </>
        ) : null}
        {inputs.type !== "NEW_TRANSACTION" ? (
          <footer className="new_transaction_footer">
            <div className="insurance_break-down">
              <span>
                <img src={info} alt="insurance info" />
              </span>
              <div>
                <p>
                  Transaction fee:{" "}
                  <span className="price">
                    {toNaira(
                      confamFeesCalc(
                        inputs.price,
                        inputs.quantity
                      ).transactionFee.toString()
                    )}
                  </span>
                </p>

                {inputs.type === "SERVICE" ? (
                  <p>
                    VAT:{" "}
                    <span className="vat">
                      {toNaira(
                        confamFeesCalc(
                          inputs.price,
                          inputs.quantity
                        ).vat.toString()
                      )}
                    </span>
                  </p>
                ) : null}
              </div>
            </div>

            <CustomButton
              type="submit"
              className="profile__cta"
              action={() => null}
              actionText="Send Transaction"
            />
          </footer>
        ) : null}
      </form>
    </section>
  );
};

export default NewTransaction;
