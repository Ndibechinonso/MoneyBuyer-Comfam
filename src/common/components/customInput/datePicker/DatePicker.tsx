import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import { DatePickerCalendar } from "./DatePickerCalender";
import { DatePickerSelector } from "./DatePickerSelector";
import DropDownWrapper from "../../dropDowns";

export interface IDatePickerProps {
  selectedDate: Dayjs;
  children: React.ReactNode;
  onChange: (newDate: Dayjs) => void;
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  selectedDate,
  onChange,
  children,
}) => {
  const [shownDate, setShownDate] = useState(selectedDate);

  return (
    <DropDownWrapper trigger={children}>
      <div className="datePicker">
        <DatePickerSelector shownDate={shownDate} setShownDate={setShownDate} />

        <DatePickerCalendar
          selectedDate={selectedDate}
          shownDate={shownDate}
          onChange={onChange}
        />
      </div>
    </DropDownWrapper>
  );
};
