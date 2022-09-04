import { useState, useId } from "react";
// import CustomModal from "../../CustomModal";
import CustomButton from "../../customButtons";
import closemodal from "../../../../static/images/dashboard_modal_close.svg";
import ArrowLeft from "../../customIcons/ArrowLeft";
// import addProduct from "../../../../static/images/add_product.svg";
import info from "../../../../static/images/insurance_info.svg";
import { Alerts } from "../../../components/redux/alert/alertActions";
import { useAppDispatch } from "../../redux/hooks";
import Product from "./Product";
import Service from "./Service";
import { toNaira } from "../../../utils/helpers";
import Calender from "../../customDate";

const NewTransaction = () => {
  const id = useId();
  const dispatch = useAppDispatch();
  // const [isModal, setModal] = useState(true);
  // const [inputs.type, setHeaderTitle] = useState("NEW_TRANSACTION");
  const initialState = {
    type: "NEW_TRANSACTION",
    sellerDetails: {
      email: "",
      phone_number: "",
    },
    ProductName: "",
    quantity: "",
    description: "",
    productModel: "",
    images: [""],
    completionDueDate: "",
    price: "40000",
    deliveryAddress: "",
    transactionFee: "",
  };

  const [inputs, setInputs] = useState(initialState);
  const [startDate, setStartDate] = useState(new Date());
  const [rawImages, setRawImages] = useState([]);
  // const [productNumber, setProductNumber] = useState(1);
  // const [serviceNumber, setServiceNumber] = useState(1);

  const regex = new RegExp("^[0-9]*$");

  // const changeFormState = (state: string) => {
  //   setHeaderTitle(state);
  // };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      name,
      value,
      files,
      dataset: { cat, type },
    } = e.target;

    if (!files) {
      if (!cat && type === "numeric" && regex.test(value)) {
        setInputs((prev) => ({ ...prev, [name]: value }));
      }
      if (!cat && type !== "numeric") {
        setInputs((prev) => ({ ...prev, [name]: value }));
      }
      if (cat && name !== "phone_number") {
        setInputs((prev) => ({
          ...prev,
          sellerDetails: { ...prev.sellerDetails, [name]: value },
        }));
      }
      if (cat && name === "phone_number" && regex.test(value)) {
        setInputs((prev) => ({
          ...prev,
          sellerDetails: { ...prev.sellerDetails, [name]: value },
        }));
      }
    }
    if (files.length) {
      setRawImages((prev) => [...prev, files[0]]);
    }
  };

  const removeImageHandler = (file: any) => {
    const temp = rawImages.filter(
      (img) => img.lastModified !== file.lastModified
    );
    setRawImages([...temp]);
  };

  const dateChange = (date: any) => {
    setStartDate(date);
    setInputs((prev) => ({ ...prev, completionDueDate: date }));
  };

  const changeType = (type: string) => {
    setInputs((prev) => ({ ...prev, type }));
  };

  return (
    <section className="new_transaction_container">
      <header className="new_transaction_header">
        {inputs.type !== "NEW_TRANSACTION" ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              setInputs(initialState);
            }}
          >
            <ArrowLeft />
          </div>
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
        <div className="close_div">
          <img
            src={closemodal}
            alt="close modal"
            onClick={() => {
              // setModal(false);
              dispatch(Alerts(""));
            }}
            className="cursor-pointer"
          />
        </div>
      </header>

      <form>
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
                  data-cat="sellerDetails"
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
                  data-cat="sellerDetails"
                  placeholder="070-123-432-11"
                  value={inputs.sellerDetails.phone_number}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label htmlFor={`${id}-due_date`}> Payment Due Date </label>
                {/* <input
                  className="new_transaction_form_input"
                  id={`${id}-due_date`}
                  type="date"
                  placeholder="1805/2020"
                  value={inputs.completionDueDate}
                  onChange={changeHandler}
                /> */}
                <Calender
                  onChange={dateChange}
                  type="picker"
                  startDate={startDate}
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
                  value={inputs.deliveryAddress}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <Product
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

            <div className="form_row">
              <div className="form_group">
                <label htmlFor={`${id}-consultant_email`}>
                  Consultant ID/Email
                </label>
                <input
                  className="new_transaction_form_input"
                  id={`${id}-consultant_email`}
                  type="text"
                  placeholder="Confam money ID or Email"
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
                />
              </div>
            </div>
            <div className="form_row">
              <div className="form_group">
                <label htmlFor={`${id}-due_date`}> Payment Due Date </label>
                <Calender
                  onChange={dateChange}
                  type="picker"
                  startDate={startDate}
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
                />
              </div>
            </div>
            <Service />
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
                  <span className="price">{toNaira(inputs.price)}</span>
                </p>

                {inputs.type === "SERVICE" ? (
                  <p>
                    VAT: <span className="vat">₦450</span>
                  </p>
                ) : null}
              </div>
            </div>

            <CustomButton
              type="submit"
              className="profile__cta"
              action={() => alert("Send Transaction")}
              actionText="Send Transaction"
            />
          </footer>
        ) : null}
      </form>
    </section>
  );
};

export default NewTransaction;
