export const BASE_URL = "https://api.example.com";
export const LANDING_PAGE = "/create-order";

export const hoursOptions = Array.from({ length: 12 }, (_, index) => (index + 1).toString());
export const minutesOptions = ["00", "15", "30", "45"];
export const ampmOptions = ["AM", "PM"];
export const cadenceOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "first week of month", label: "First Week of Month" },
  { value: "last week of month", label: "Last Week of Month" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
];
export const daysOfWeekOptions = [
  { value: "Sunday", label: "Sunday" },
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
];
