import { useState, useId } from "react";
import Milestone from "./Milestone";
import addmilestone from "../../../../static/images/add_milestone.svg";
import CustomImageInput from "../../CustomImageInput";

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
  removeImageHandler: (file: any) => void;
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
  } = props;
  const id = useId();
  const [milestoneNumber, setMilestoneNumber] = useState(1);

  return (
    <div>
      <h5>Service Information</h5>
      <div className="form_row">
        <div className="form_group">
          <label htmlFor={`${id}-service_name`}> Service Name</label>
          <input
            className="new_transaction_form_input"
            id={`${id}-service_name`}
            type="text"
            placeholder="UI Design"
            name="ProductName"
            value={product_name}
            onChange={changeHandler}
          />
        </div>

        <div className="form_group">
          <label htmlFor={`${id}-service_quantity`}> Service Quantity </label>
          <input
            className="new_transaction_form_input"
            id={`${id}-service_quantity`}
            type="text"
            placeholder="e.g 10"
            name="qauntity"
            value={product_quantity}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_group">
          <label htmlFor={`${id}-service_price`}> Service Price </label>
          <input
            className="new_transaction_form_input"
            id={`${id}-service_price`}
            type="text"
            placeholder="e.g 1000"
            name="price"
            value={product_price}
            onChange={changeHandler}
          />
        </div>
        {/* <div className="form_group">
          <label htmlFor={`${id}-product_image`}> Service Photo </label>
          <input
            className="new_transaction_form_input"
            id={`${id}-product_image`}
            type="file"
            placeholder="No file Chosen"
          />
        </div> */}
        <CustomImageInput
          changeHandler={changeHandler}
          deleteHandler={removeImageHandler}
          value={product_image}
          label="Service Photo"
        />
      </div>

      <div className="form_group">
        <label htmlFor={`${id}-product_description`}>Service Description</label>
        <textarea
          className="new_transaction_form_input new_transaction_description"
          id={`${id}-product_description`}
          placeholder="Enter product’s description"
          name="description"
          value={product_description}
          onChange={changeHandler}
        />
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
