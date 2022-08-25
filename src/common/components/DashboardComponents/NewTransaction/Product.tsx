import { useState, useId } from "react";

const Product = () => {
  const id = useId();

  return (
    <div>
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
          <label htmlFor={`${id}-product_quantity`}>Product Quantity</label>
          <input
            className="new_transaction_form_input"
            id={`${id}-product_quantity`}
            type="text"
            placeholder="0"
          />
        </div>
      </div>
      <div className="form_group">
        <label htmlFor={`${id}-product_description`}>Product Description</label>
        <textarea
          className="new_transaction_form_input new_transaction_description"
          id={`${id}-product_description`}
          placeholder="Enter product’s description"
        ></textarea>
      </div>
      <div className="insurance_div">
        <div className="check_div">
          <input
            type="checkbox"
            id="insurance"
            name="insurance"
            value="insurance"
          />
          <label htmlFor="insurance">I am Insuring this product</label>
        </div>
      </div>
    </div>
  );
};

export default Product;
