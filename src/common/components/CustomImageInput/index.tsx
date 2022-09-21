import React from "react";
import Pulse from "../CustomIcons/Pulse";

type Props = {
  label: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: Array<any>;
  deleteHandler: (itm: any, idx: number) => void;
  disabled?: boolean;
  placeholder?: string;
};

function CustomImageInput(props: Props) {
  const { label, changeHandler, value, deleteHandler, disabled, placeholder } =
    props;
  const id = React.useId();

  return (
    <div className="form_group custom_image_input">
      <label htmlFor={`${id}-product_image`}> {label} </label>
      <div className="product_image">
        <input
          required
          className="new_transaction_form_input"
          id={`${id}-product_image`}
          type="file"
          name="images"
          disabled={value.length === 4 || disabled}
          placeholder="No file Chosen"
          accept="image/png, image/jpeg"
          onChange={changeHandler}
        />
        <span>Choose File</span>
        <div className="image_container">
          {value.length === 0 && placeholder ? (
            <span>{placeholder}</span>
          ) : (
            value.map((img, idx) =>
              img?.lastModified ? (
                <div key={img?.lastModified} className="product_img">
                  <img
                    onClick={() => deleteHandler(img, idx)}
                    className="product_img"
                    key={img?.lastModified}
                    src={URL.createObjectURL(img)}
                    alt={`product`}
                  />
                </div>
              ) : (
                <div key={img} className="product_img">
                  <Pulse />
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomImageInput;
