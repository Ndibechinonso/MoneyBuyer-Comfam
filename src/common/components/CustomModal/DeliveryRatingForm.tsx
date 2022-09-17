import React, { ChangeEvent } from "react";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch } from "../redux/hooks";

function DeliveryRatingForm() {
  const dispatch = useAppDispatch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(Alerts("deliveryfeedback"));
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="rating-angry"></label>
        <input
          type="radio"
          id="rating-angry"
          onChange={changeHandler}
          value="1"
          name="rating"
        />
      </div>
      <div>
        <label htmlFor="rating-frown"></label>
        <input
          type="radio"
          onChange={changeHandler}
          id="rating-frown"
          value="2"
          name="rating"
        />
      </div>
      <div>
        <label htmlFor="rating-neutral"></label>
        <input
          type="radio"
          onChange={changeHandler}
          id="rating-neutral"
          value="3"
          name="rating"
        />
      </div>
      <div>
        <label htmlFor="rating-smile"></label>
        <input
          type="radio"
          onChange={changeHandler}
          id="rating-smile"
          value="4"
          name="rating"
        />
      </div>
      <div>
        <label htmlFor="rating-smile"></label>
        <input
          type="radio"
          onChange={changeHandler}
          id="rating-smile"
          value="5"
          name="rating"
        />
      </div>
    </form>
  );
}

export default DeliveryRatingForm;
