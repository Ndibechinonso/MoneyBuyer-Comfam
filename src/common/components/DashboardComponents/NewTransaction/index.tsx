import { useState, useId } from "react";
import CustomModal from "../../CustomModal";
import CustomButton from "../../customButtons";
import closemodal from "../../../../static/images/dashboard_modal_close.svg";
import ArrowLeft from "../../customIcons/ArrowLeft";
import addProduct from "../../../../static/images/add_product.svg";
import info from "../../../../static/images/insurance_info.svg";
import { Alerts } from "../../../components/redux/alert/alertActions";
import { useAppDispatch } from "../../redux/hooks";
import Product from "./Product";
import Service from "./Service";

const NewTransaction = () => {
  const id = useId();
  const dispatch = useAppDispatch();
  const [isModal, setModal] = useState(true);
  const [headerTittle, setHeaderTitle] = useState("New Transaction");
  const [productNumber, setProductNumber] = useState(1);
  const [serviceNumber, setServiceNumber] = useState(1);
  const changeFormState = (state: string) => {
    setHeaderTitle(state);
  };
  return (
    <div className="new_transaction_container">
      <div className="new_transaction_header">
        {headerTittle !== "New Transaction" ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              changeFormState("New Transaction");
            }}
          >
            <ArrowLeft />
          </div>
        ) : null}
        <h4>{headerTittle}</h4>
        <div className="close_div">
          <img
            src={closemodal}
            alt="close modal"
            onClick={() => {
              setModal(false);
              dispatch(Alerts(""));
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
      {headerTittle === "New Transaction" ? (
        <div className="transaction_cards_container">
          <div
            className="transaction_card cursor-pointer"
            onClick={() => {
              changeFormState("Buyer ’s Information");
            }}
          >
            Product
          </div>
          <div
            className="transaction_card cursor-pointer"
            onClick={() => {
              changeFormState("Consultant Information");
            }}
          >
            Service
          </div>
        </div>
      ) : null}

      {headerTittle === "Buyer ’s Information" ? (
        <form>
          <h5>Buyer ’s Information</h5>

          <div className="form_row">
            <div className="form_group">
              <label htmlFor={`${id}-buyer_email`}> Buyer ID/ Email </label>
              <input
                className="new_transaction_form_input"
                id={`${id}-buyer_email`}
                type="text"
                placeholder="james@email.com"
              />
            </div>

            <div className="form_group">
              <label htmlFor={`${id}-phoneNumber`}> Buyer Phone Number </label>
              <input
                className="new_transaction_form_input"
                id={`${id}-phoneNumber`}
                type="tel"
                placeholder="070-123-432-11"
              />
            </div>
          </div>

          <div className="form_row">
            <div className="form_group">
              <label htmlFor={`${id}-due_date`}> Payment Due Date </label>
              <input
                className="new_transaction_form_input"
                id={`${id}-due_date`}
                type="text"
                placeholder="1805/2020"
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-delivery_address`}>Delivery Address</label>
              <input
                className="new_transaction_form_input"
                id={`${id}-delivery_address`}
                type="text"
                placeholder="Lagos Nigeria"
              />
            </div>
          </div>

          {Array.from(Array(productNumber)).map((item, index) => (
            <Product key={index} />
          ))}

          <div className="add_product">
            <span
              className="check_div"
              onClick={() => setProductNumber((prev) => prev + 1)}
            >
              <img src={addProduct} alt="add product" />
              <div className="submit_div">Add product</div>
            </span>
          </div>
          <div className="new_transaction_form_footer">
            <div className="insurance_break-down">
              <span>
                <img src={info} alt="insurance info" />
              </span>
              <div>
                <div>
                  Transaction fee: <span className="price">₦1,000</span>
                </div>
                <div>
                  Insurance: <span className="price">₦1,500</span>
                </div>
              </div>
            </div>

            <div className="submit_div">
              <CustomButton
                className="profile__cta"
                action={() => alert("Send Transaction")}
                actionText="Send Transaction"
              />
            </div>
          </div>
        </form>
      ) : null}

      {headerTittle === "Consultant Information" ? (
        <form>
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
                placeholder="Abrahamcollins@gmail.com"
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
                placeholder="070-123-432-11"
              />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label htmlFor={`${id}-due_date`}> Payment Due Date </label>
              <input
                className="new_transaction_form_input"
                id={`${id}-due_date`}
                type="text"
                placeholder="30/03/2022"
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
                placeholder="Lagos Nigeria"
              />
            </div>
          </div>
          {Array.from(Array(serviceNumber)).map((item, index) => (
            <Service key={index} />
          ))}
          <div
            className="check_div"
            style={{ marginTop: "18px" }}
            onClick={() => setServiceNumber((prev) => prev + 1)}
          >
            <img src={addProduct} alt="add product" />
            <div className="submit_div">Add Service</div>
          </div>
          <div className="new_transaction_form_footer">
            <div className="insurance_break-down">
              <span>
                <img src={info} alt="insurance info" />
              </span>
              <div>
                Transaction fee: <span className="price">₦1,000</span>
              </div>
            </div>

            <div className="submit_div">
              <CustomButton
                className="profile__cta"
                action={() => alert("Send Transaction")}
                actionText="Send Transaction"
              />
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default NewTransaction;
