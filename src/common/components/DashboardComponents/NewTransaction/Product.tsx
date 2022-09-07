import { useState, useId } from "react";
import CustomImageInput from "../../CustomImageInput";

interface Iproduct {
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
  removeImageHandler: (file: any, idx:number) => void;
}

const Product = ({
  product_name,
  product_price,
  product_image,
  product_quantity,
  product_description,
  changeHandler,
  removeImageHandler,
}: Iproduct) => {
  const id = useId();

  // URL.createObjectURL(file)

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
            name="productName"
            placeholder="Laptop"
            onChange={changeHandler}
            value={product_name}
          />
        </div>
        <div className="form_group">
          <label htmlFor={`${id}-product_price`}> Product Price </label>
          <input
            type="tel"
            className="new_transaction_form_input"
            id={`${id}-product_price`}
            pattern="[0-9\/]*"
            name="price"
            data-type="numeric"
            value={product_price}
            onChange={changeHandler}
          />
          {/* <input
            required
            pattern="/^[a-zA-Z\d]+$/"
            name="price"
            className="new_transaction_form_input"
            id={`${id}-product_price`}
            type="text"
            placeholder="140,0000"
            value={product_price}
            onChange={changeHandler}
          /> */}
        </div>
      </div>
      <div className="form_row">
        <CustomImageInput
          value={product_image}
          label="Product Image"
          changeHandler={changeHandler}
          deleteHandler={removeImageHandler}
        />
        {/* <div className="form_group">
          <label htmlFor={`${id}-product_image`}> Product Image </label>
          <div className="product_image">
            <input
              className="new_transaction_form_input"
              id={`${id}-product_image`}
              type="file"
              name="images"
              disabled={product_image.length === 4}
              placeholder="No file Chosen"
              accept="image/png, image/jpeg"
              // value={product_image}
              // onChange={e => console.log(e.target.files)}
              onChange={changeHandler}
            />
            <span>Choose File</span>
            <div className="image_container">
              {product_image.map((img, idx) => (
                <span
                  onClick={() => removeImageHandler(img)}
                  className="product_img"
                  key={img?.lastModified}
                >
                  {`img-${idx + 1}`}
                </span>
              ))}
            </div>
          </div>
        </div> */}
        <div className="form_group">
          <label htmlFor={`${id}-product_quantity`}>Product Quantity</label>
          <input
            className="new_transaction_form_input"
            id={`${id}-product_quantity`}
            type="text"
            name="quantity"
            placeholder="0"
            data-type="numeric"
            value={product_quantity}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="form_group">
        <label htmlFor={`${id}-product_description`}>Product Description</label>
        <textarea
          className="new_transaction_form_input new_transaction_description"
          name="description"
          id={`${id}-product_description`}
          placeholder="Enter product’s description"
          value={product_description}
          // onChange={e => console.log(e)}
          onChange={changeHandler}
        />
      </div>
      {/* <div className="insurance_div">
        <div className="check_div">
          <input
            type="checkbox"
            id="insurance"
            name="insurance"
            value="insurance"
          />
          <label htmlFor="insurance">I am Insuring this product</label>
        </div>
      </div> */}
    </div>
  );
};

export default Product;
