import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import { DatePickerCalendar } from "./DatePickerCalender";
import { DatePickerSelector } from "./DatePickerSelector";
import DropDownMenuContent from "../../dropDowns/primitive/DropDownMenuContent";

export interface IDatePickerProps {
  selectedDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  selectedDate,
  onChange,
}) => {
  const [shownDate, setShownDate] = useState(selectedDate);

  return (
    <DropDownMenuContent className="datePicker">
      <DatePickerSelector shownDate={shownDate} setShownDate={setShownDate} />

      <DatePickerCalendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
      />
    </DropDownMenuContent>
  );
};
