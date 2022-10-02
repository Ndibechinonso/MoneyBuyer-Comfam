import { Dayjs } from "dayjs";

export interface ICalendarCell {
    text: string;
    value: Dayjs;
  }
  
  function getCalendarCells(date: Dayjs): ICalendarCell[] {
    const daysInMonth = date.daysInMonth();
    const calendarCells: ICalendarCell[] = [];
  
    const prepareCell = (date: Dayjs, dayNumber: number) => {
      return {
        text: String(dayNumber),
        value: date.clone().set("date", dayNumber)
      };
    };
  
    // push current month day cells
    for (let i = 0; i < daysInMonth; i++) {
      calendarCells.push(prepareCell(date, i + 1));
    }
  
    // how much more we need to add?
    const cellsToAdd = 35 - daysInMonth;
  
    // add to start from prev month
    const lastMonth = date.subtract(1, "month");
    for (let i = 0; i < Math.floor(cellsToAdd / 2); i++) {
      calendarCells.unshift(prepareCell(lastMonth, lastMonth.daysInMonth() - i));
    }
  
    // add to end from next month
    const nextMonth = date.add(1, "month");
    for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
      calendarCells.push(prepareCell(nextMonth, i + 1));
    }
  
    return calendarCells;
  }
  
  export function getCalendarRows(date: Dayjs): Array<ICalendarCell[]> {
    const cells = getCalendarCells(date);
    const rows: Array<ICalendarCell[]> = [];
  
    // split one array into chunks
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(cells.slice(i, i + 7));
    }
  
    return rows;
  }

  export const daysOfWeek = [
    {
      title: "S",
      val:"Sun"
    },
    {
      title: "M",
      val:"Mon"
    },
    {
      title: "T",
      val:"Tue"
    },
    {
      title: "W",
      val:"Wed"
    },
    {
      title: "T",
      val:"Thu"
    },
    {
      title: "F",
      val:"Fri"
    },
    {
      title: "S",
      val:"Sat"
    },
  ]