import React from "react";
import { Dayjs } from "dayjs";
import { changeDateMonth } from "./utils/utilsFun";
import clsx from "clsx";
import CaretLeft from "../../customIcons/CaretLeft";
import CaretRight from "../../customIcons/CaretRight";

export interface IDatePickerSelectorProps {
  shownDate: Dayjs;

  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

export const DatePickerSelector: React.FC<IDatePickerSelectorProps> = ({
  shownDate,
  setShownDate,
}) => {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  return (
    <div className={"DatePickerSelector"}>
      <div className={"DatePickerSelector__date"}>
        {shownDate.format("MMMM YYYY")}
      </div>

      <div className="DatePickerSelector__action">
        <div
          className={clsx(
            "DatePickerSelector__icon",
            "DatePickerSelector__iconLeft"
          )}
          onClick={handleIconClick(false)}
        >
          <CaretLeft />
        </div>
        <div
          className={clsx(
            "DatePickerSelector__icon",
            "DatePickerSelector__iconRight"
          )}
          onClick={handleIconClick(true)}
        >
          <CaretRight />
        </div>
      </div>
    </div>
  );
};
