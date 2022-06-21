import { useState, useId } from "react";
import CustomModal from "../../CustomModal";
import CustomButton from "../../customButtons";
import closemodal from "../../../../static/images/dashboard_modal_close.svg";
import arrowLeft from "../../../../static/images/arrow_left.svg";
import addProduct from "../../../../static/images/add_product.svg";
import addmilestone from "../../../../static/images/add_milestone.svg";
import info from "../../../../static/images/insurance_info.svg";
import { Alerts } from "../../../components/redux/alert/alertActions";
import { useAppDispatch } from "../../redux/hooks";

const NewTransaction = () => {
  const id = useId();
  const dispatch = useAppDispatch();
  const [isModal, setModal] = useState(true);
  const [headerTittle, setHeaderTitle] = useState("New Transaction");


  const changeFormState = (state: string) => {
    setHeaderTitle(state)
  }
  return (
    <div className="new_transaction_container">
      <div className="new_transaction_header">
       { headerTittle !== "New Transaction" ?<div className="cursor-pointer" onClick={() => {changeFormState("New Transaction")}}>
          <img src={arrowLeft} alt="go back" />
        </div> : null }
        <h4>{headerTittle}</h4>
        <div className="close_div">
          <img
            src={closemodal}
            alt="close modal"
            onClick={() => {
              setModal(false);
              dispatch(Alerts(""));
            }}
            className="cursor-pointer "
          />
        </div>
      </div>
  { headerTittle === "New Transaction"  ? <div className="transaction_cards_container"><div className="transaction_card cursor-pointer" onClick={() => {changeFormState("Buyer ’s Information")}}  >Product</div>  <div className="transaction_card cursor-pointer" onClick={() => {changeFormState("Consultant Information")}} >Service</div> </div> : null }
     
      {headerTittle === "Buyer ’s Information" ?  
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
            <label htmlFor={`${id}-delivery_address`}> Delivery Address</label>
            <input
              className="new_transaction_form_input"
              id={`${id}-delivery_address`}
              type="text"
              placeholder="Lagos Nigeria"
            />
          </div>
          </div>


        <h5>Product Information</h5>

        <div className="form_row">
        <div className="form_group">
          <label htmlFor={`${id}-product_name`}> Product Name </label>
          <input
            className="new_transaction_form_input"
            id={`${id}-product_name`}
            type="text"
            placeholder="Laptop"
          />
        </div>

        <div className="form_group">
          <label htmlFor={`${id}-product_price`}> Product Price </label>
          <input
           className="new_transaction_form_input"
            id={`${id}-product_price`}
            type="text"
            placeholder="140,0000"
          />
        </div>
</div>

<div className="form_row">
        <div className="form_group">
          <label htmlFor={`${id}-product_image`}> Product Image </label>
          <input
            className="new_transaction_form_input"
            id={`${id}-product_image`}
            type="file"
            placeholder="No file Chosen"
          />
        </div>
        <div className="form_group">
          <label htmlFor={`${id}-product_quantity`}> Product Quantity</label>
          <input
            className="new_transaction_form_input"
            id={`${id}-product_quantity`}
            type="text"
            placeholder="0"
          />
        </div>
        </div>

        <div className="form_group">
          <label htmlFor={`${id}-product_description`}>
            {" "}
            Product Description
          </label>
          <textarea  className="new_transaction_form_input new_transaction_description"
            id={`${id}-product_description`}
            placeholder="Enter product’s description">

          </textarea>
        </div>

        <div className="insurance_div">
          <div className="check_div">
            <input
              type="checkbox"
              id="insurance"
              name="insurance"
              value="insurance"
            />{" "}
            <label htmlFor="insurance">I am Insuring this product</label>
          </div>{" "}
          <div className="check_div">
            <img src={addProduct} alt="add product" /> <div className="submit_div">Add product</div>
          </div>{" "}
        </div>
        <div className="new_transaction_form_footer">
            <div className="insurance_break-down"><span><img src={info} alt="insurance info"/></span><div><div>Transaction fee: <span className="price">₦1,000</span></div><div>Insurance: <span className="price">₦1,500</span></div></div></div>
            
           <div className="submit_div"><CustomButton className="profile__cta"
                  action={() => alert("Send Transaction")}
                  actionText="Send Transaction"/> </div> 
            </div>
      </form> : null}

{headerTittle === "Consultant Information" ?
      <form>
        <h5>Consultant Information</h5>

        <div className="form_row">
          <div className="form_group">
            <label htmlFor={`${id}-consultant_email`}>
              {" "}
              Consultant ID/Email{" "}
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
              {" "}
              Consultant Phone Number{" "}
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
              {" "}
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

        <h5>Service Information</h5>

        <div className="form_row">
          <div className="form_group">
            <label htmlFor={`${id}-service_name`}> Service Name</label>
            <input
              className="new_transaction_form_input"
              id={`${id}-service_name`}
              type="text"
              placeholder="UI Design"
            />
          </div>

          <div className="form_group">
            <label htmlFor={`${id}-service_price`}> Service Price </label>
            <input
              className="new_transaction_form_input"
              id={`${id}-service_price`}
              type="text"
              placeholder="800000"
            />
          </div>
        </div>

        <div className="form_row">
          <div className="form_group">
            <label htmlFor={`${id}-product_image`}> Service Photo </label>
            <input
              className="new_transaction_form_input"
              id={`${id}-product_image`}
              type="file"
              placeholder="No file Chosen"
            />
          </div>
        </div>

        <div className="form_group">
          <label htmlFor={`${id}-product_description`}>
            {" "}
            Service Description
          </label>
          <textarea
            className="new_transaction_form_input new_transaction_description"
            id={`${id}-product_description`}
            placeholder="Enter product’s description"
          ></textarea>
        </div>

        <div className="milestone">
          <h6>Milestone <span>(Optional)</span></h6>
          <div className="form_row">
            <div className="form_group">
              <label htmlFor={`${id}-task_!`}> Task 1</label>
              <input
                className="milestone_form_input"
                id={`${id}-task_!`}
                type="text"
                placeholder="UI Design"
              />
            </div>

            <div className="form_group">
              <label htmlFor={`${id}-attached_price`}> Attached Price</label>
              <input
                className="milestone_form_input"
                id={`${id}-attached_price`}
                type="text"
                placeholder="e.g 1000"
              />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label htmlFor={`${id}-inspection_period`}>
                Inspection Period
              </label>
              <input
                className="milestone_form_input"
                id={`${id}-inspection_period`}
                type="text"
                placeholder="10 days"
              />
            </div>

            <div className="form_group">
              <label htmlFor={`${id}-due_date`}> Due Date</label>
              <input
                className="milestone_form_input"
                id={`${id}-due_date`}
                type="text"
                placeholder="30/03/2022"
              />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label htmlFor={`${id}-inspection_period`}>
                Task Description
              </label>
              <input
                className="new_transaction_form_input"
                id={`${id}-inspection_period`}
                type="text"
                placeholder="10 days"
              />
            </div>
          </div>
          <div className="check_div add_milestone_div">
            <img src={addmilestone} alt="add product" />{" "}
            <div className="submit_div">Add Milestone</div>
          </div>{" "}
        </div>

        <div className="insurance_div">
          <div className="check_div">
            <img src={addProduct} alt="add product" />{" "}
            <div className="submit_div">Add product</div>
          </div>{" "}
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
            />{" "}
          </div>
        </div>
      </form> : null }
    </div>
  );
};

export default NewTransaction;
