import { useId } from "react";
import CustomImageInput from "../../CustomImageInput";
import { useAppSelector } from "../../redux/hooks";

interface Iproduct {
  insuranceRequested: boolean;
  product_name: string;
  product_price: number;
  product_image: Array<any>;
  product_quantity: number;
  product_description: string;
  changeHandler: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  removeImageHandler: (file: any, idx: number) => void;
}

const Product = ({
  insuranceRequested,
  product_name,
  product_price,
  product_image,
  product_quantity,
  product_description,
  changeHandler,
  removeImageHandler,
}: Iproduct) => {
  const { isloading } = useAppSelector((state) => state.isloading);
  const id = useId();

  // URL.createObjectURL(file)

  return (
    <div>
      <h5>Product Information</h5>
      <div className="form_row">
        <div className="form_group">
          <label htmlFor={`${id}-product_name`}> Product Name </label>
          <input
            required
            className="new_transaction_form_input"
            id={`${id}-product_name`}
            type="text"
            name="productName"
            placeholder="Laptop"
            disabled={isloading}
            onChange={changeHandler}
            value={product_name}
          />
        </div>
        <div className="form_group">
          <label htmlFor={`${id}-product_price`}> Product Price </label>
          <input
            required
            type="tel"
            className="new_transaction_form_input"
            id={`${id}-product_price`}
            pattern="[0-9\/]*"
            name="price"
            data-type="numeric"
            disabled={isloading}
            value={product_price}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="form_row">
        <CustomImageInput
          value={product_image}
          label="Product Image"
          disabled={isloading}
          changeHandler={changeHandler}
          deleteHandler={removeImageHandler}
        />
        <div className="form_group">
          <label htmlFor={`${id}-product_quantity`}>Product Quantity</label>
          <input
            required
            className="new_transaction_form_input"
            id={`${id}-product_quantity`}
            type="text"
            name="quantity"
            placeholder="0"
            disabled={isloading}
            value={product_quantity}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="form_group">
        <label htmlFor={`${id}-product_description`}>Product Description</label>
        <textarea
          required
          className="new_transaction_form_input new_transaction_description"
          name="description"
          id={`${id}-product_description`}
          placeholder="Enter product’s description"
          value={product_description}
          disabled={isloading}
          onChange={changeHandler}
        />
      </div>
      <div className="insurance_div">
        <div className="check_div">
          <input
            type="checkbox"
            id="insurance"
            name="insuranceRequested"
            disabled={isloading}
            onChange={changeHandler}
            checked={insuranceRequested}
          />
          <label htmlFor="insurance">I am Insuring this product</label>
        </div>
      </div>
    </div>
  );
};

export default Product;
