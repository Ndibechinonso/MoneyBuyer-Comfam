import { useState, useId } from "react";
import Milestone from "./Milestone";
import addmilestone from "../../../../static/images/add_milestone.svg";
import CustomImageInput from "../../CustomImageInput";
import { useAppSelector } from "../../redux/hooks";

interface Iservice {
  product_name: string;
  product_price: string;
  product_image: Array<any>;
  product_quantity: string;
  product_description: string;
  changeHandler: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  removeImageHandler: (file: any, idx: number) => void;
  blurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Service = (props: Iservice) => {
  const {
    changeHandler,
    product_description,
    product_image,
    product_name,
    product_price,
    product_quantity,
    removeImageHandler,
    blurHandler,
  } = props;
  const id = useId();
  const [milestoneNumber, setMilestoneNumber] = useState(1);
  const { isloading } = useAppSelector((state) => state.isloading);

  return (
    <div>
      <h5>Service Information</h5>
      <div className="form_row">
        <div className="form_group">
          <label htmlFor={`${id}-service_name`}> Service Name</label>
          <input
            required
            autoComplete="off"
            className="new_transaction_form_input"
            id={`${id}-service_name`}
            type="text"
            placeholder="e.g UI Design"
            name="productName"
            disabled={isloading}
            value={product_name}
            onChange={changeHandler}
          />
        </div>

        <div className="form_group">
          <label htmlFor={`${id}-service_quantity`}> Service Quantity </label>
          <input
            required
            autoComplete="off"
            className="new_transaction_form_input"
            id={`${id}-service_quantity`}
            type="text"
            placeholder="e.g 10"
            name="quantity"
            disabled={isloading}
            value={product_quantity}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_group">
          <label htmlFor={`${id}-service_price`}> Service Price </label>
          <input
            required
            autoComplete="off"
            className="new_transaction_form_input"
            id={`${id}-service_price`}
            type="text"
            placeholder="e.g 1000"
            name="price"
            disabled={isloading}
            value={product_price}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </div>

        <CustomImageInput
          changeHandler={changeHandler}
          deleteHandler={removeImageHandler}
          value={product_image}
          disabled={isloading}
          label="Service Photo"
        />
      </div>

      <div className="form_row">
        <div className="form_group">
          <label htmlFor={`${id}-product_description`}>
            Service Description
          </label>
          <textarea
            autoComplete="off"
            className="new_transaction_form_input new_transaction_description"
            id={`${id}-product_description`}
            placeholder="Enter product’s description"
            name="description"
            disabled={isloading}
            value={product_description}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="milestone">
        <h6>
          Milestone <span>(Optional)</span>
        </h6>
        {Array.from(Array(milestoneNumber)).map((item, index) => (
          <Milestone key={index} taskNumber={index + 1} />
        ))}

        <div
          className="check_div add_milestone_div"
          onClick={() => {
            setMilestoneNumber((prev) => prev + 1);
          }}
        >
          <img src={addmilestone} alt="add product" />
          <div className="submit_div" style={{ color: "#333333" }}>
            Add Milestone
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
