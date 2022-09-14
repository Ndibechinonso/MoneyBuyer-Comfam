export interface Icalendar {
    startDate: Date;
    endDate?: Date | null;
    onChange: (e: any) => void;
    type: "range" | "picker";
    disable?: boolean;
    minDate?: boolean;
    placeholder?: string;
  }