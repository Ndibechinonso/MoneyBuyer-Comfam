import React, { useMemo } from "react";
import { Dayjs } from "dayjs";
import clsx from "clsx";

import { getCalendarRows } from "./utils/utils";
import DropDownItem from "../../DropDowns/primitive/DropDownItem";

export interface IDatePickerCalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;

  onChange: (newDate: Dayjs) => void;
}

export const DatePickerCalendar: React.FC<IDatePickerCalendarProps> = ({
  shownDate,
  selectedDate,
  onChange,
}) => {
  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value);
  };

  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);

  return (
    <>
      <div className={"DatePickerCalendar__header"}>
        {rows[0].map(({ value }, i) => {
          return (
            <div key={i} className={"DatePickerCalendar__cell"}>
              {value.format("dd")}
            </div>
          );
        })}
      </div>

      {rows.map((cells, rowIndex) => (
        <div key={rowIndex} className={"DatePickerCalendar__row"}>
          {cells.map(({ text, value }, i) => {
            return (
              <DropDownItem
                key={`${text} - ${i}`}
                className={clsx(
                  "DatePickerCalendar__cell",
                  "DatePickerCalendar__dayCell",
                  {
                    DatePickerCalendar__dayCell_selected:
                      value.toString() === selectedDate.toString(),
                  }
                )}
                onClick={handleSelectDate(value)}
              >
                {text}
              </DropDownItem>
            );
          })}
        </div>
      ))}
    </>
  );
};
