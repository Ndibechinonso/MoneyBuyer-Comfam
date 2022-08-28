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
  // const [isModal, setModal] = useState(true);
  const [headerTittle, setHeaderTitle] = useState("New Transaction");
  const initialState = {
    type: "SERVICE",
    sellerDetails: {
      email: "johnloydlegend@yahoo.com.au",
      phone_number: "09021132111",
    },
    ProductName: "Game girl",
    quantity: "3",
    description: "Testers  product",
    productModel: "X6",
    images: [
      "https://scontent.flos1-1.fna.fbcdn.net/v/t1.18169-9/16406792_1697302513620567_6685930053906838018_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGkTDrrc3-2Wwlyl9Bmr6zQshCopVX0KsGyEKilVfQqwZKpyTzIUN8nnRdYF4Lj5zZHT4LNJ_QQI_qeixpZK5QV&_nc_ohc=UIvpxr22luYAX_057Md&_nc_ht=scontent.flos1-1.fna&oh=00_AT8OE5vhzkLu5l96muMoUaRA30nWAW3EH-csvQFbwTsRCw&oe=62DBAA7D",
    ],
    completionDueDate: "2022-06-25T17:01:58.353Z",
    price: "40000",
    deliveryAddress:
      "price must be a number conforming to the specified constraints",
    transactionFee: "2000",
  };
  const [inputs, setInputs] = useState(initialState);
  const [productNumber, setProductNumber] = useState(1);
  const [serviceNumber, setServiceNumber] = useState(1);
  const changeFormState = (state: string) => {
    setHeaderTitle(state);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement> |React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
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
              // setModal(false);
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
                type="email"
                placeholder="james@email.com"
                value={inputs.sellerDetails.email}
                onChange={changeHandler}
              />
            </div>

            <div className="form_group">
              <label htmlFor={`${id}-phoneNumber`}> Buyer Phone Number </label>
              <input
                className="new_transaction_form_input"
                id={`${id}-phoneNumber`}
                type="tel"
                placeholder="070-123-432-11"
                value={inputs.sellerDetails.phone_number}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form_row">
            <div className="form_group">
              <label htmlFor={`${id}-due_date`}> Payment Due Date </label>
              <input
                className="new_transaction_form_input"
                id={`${id}-due_date`}
                type="date"
                placeholder="1805/2020"
                value={inputs.completionDueDate}
                onChange={changeHandler}
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-delivery_address`}>Delivery Address</label>
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

          {/* {Array.from(Array(productNumber)).map((item, index) => ( */}
          <Product
            product_description={inputs.description}
            product_image={inputs.images}
            product_name={inputs.ProductName}
            product_price={inputs.price}
            product_quantity={inputs.quantity}
            changeHandler={changeHandler}
          />
          {/* ))} */}

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
