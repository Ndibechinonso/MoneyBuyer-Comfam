import { useState, useId } from "react";
import Milestone from "./Milestone";
import addmilestone from "../../../../static/images/add_milestone.svg";

const Service = () => {
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
        <label htmlFor={`${id}-product_description`}>Service Description</label>
        <textarea
          className="new_transaction_form_input new_transaction_description"
          id={`${id}-product_description`}
          placeholder="Enter product’s description"
        ></textarea>
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
