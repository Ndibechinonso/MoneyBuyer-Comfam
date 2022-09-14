import React from "react";

type Props = {
  label: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: Array<any>;
  deleteHandler: (itm: any, idx: number) => void;
  disabled?: boolean;
};

function CustomImageInput(props: Props) {
  const { label, changeHandler, value, deleteHandler, disabled } = props;
  const id = React.useId();

  return (
    <div className="form_group">
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
          {value.map(
            (img, idx) =>
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
                  <img
                    onClick={() => deleteHandler(img, idx)}
                    className="product_img"
                    key={img?.lastModified}
                    src={img}
                    alt={`product`}
                  />
                </div>
              )

            //   {`img-${idx + 1}`}
            // </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomImageInput;
