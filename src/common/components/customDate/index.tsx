import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Icalendar {
  startDate: Date;
  endDate?: Date | null;
  onChange: (e: any) => void;
  type: "range" | "picker";
  disable?: boolean;
}

function Calender({ startDate, endDate, onChange, type, disable }: Icalendar) {
  let template;
  switch (type) {
    case "picker":
      template = (
        <DatePicker
          renderCustomHeader={({
            monthDate,
            customHeaderCount,
            decreaseMonth,
            increaseMonth,
          }) => (
            <div>
              <button
                type="button"
                aria-label="Previous Month"
                className={
                  "react-datepicker__navigation react-datepicker__navigation--previous"
                }
                style={
                  customHeaderCount === 1 ? { visibility: "hidden" } : null
                }
                onClick={decreaseMonth}
              >
                <span
                  className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                  }
                >
                  {"<"}
                </span>
              </button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                type="button"
                aria-label="Next Month"
                className={
                  "react-datepicker__navigation react-datepicker__navigation--next"
                }
                style={
                  customHeaderCount === 0 ? { visibility: "hidden" } : null
                }
                onClick={increaseMonth}
              >
                <span
                  className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                  }
                >
                  {">"}
                </span>
              </button>
            </div>
          )}
          selected={startDate}
          onChange={onChange}
          monthsShown={2}
          disabled={disable}
        />
      );
      break;
    case "range":
      template = (
        <DatePicker
          renderCustomHeader={({
            monthDate,
            customHeaderCount,
            decreaseMonth,
            increaseMonth,
          }) => (
            <div>
              <button
                type="button"
                aria-label="Previous Month"
                className={
                  "react-datepicker__navigation react-datepicker__navigation--previous"
                }
                style={
                  customHeaderCount === 1 ? { visibility: "hidden" } : null
                }
                onClick={decreaseMonth}
              >
                <span
                  className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                  }
                >
                  {"<"}
                </span>
              </button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                type="button"
                aria-label="Next Month"
                className={
                  "react-datepicker__navigation react-datepicker__navigation--next"
                }
                style={
                  customHeaderCount === 0 ? { visibility: "hidden" } : null
                }
                onClick={increaseMonth}
              >
                <span
                  className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                  }
                >
                  {">"}
                </span>
              </button>
            </div>
          )}
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          monthsShown={2}
          disabled={disable}
        />
      );
      break;

    default:
      break;
  }

  return template;
}

const MemCalendar = React.memo(Calender);

export default MemCalendar;
