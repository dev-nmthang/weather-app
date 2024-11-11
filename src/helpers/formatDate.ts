import { format, getDate } from "date-fns";

export default function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const dayOfWeek = format(date, "EEE");

  const dayOfMonth = getDate(date);

  const suffix = (day: number) => {
    if (day % 10 === 1 && day !== 11) return "st";
    if (day % 10 === 2 && day !== 12) return "nd";
    if (day % 10 === 3 && day !== 13) return "rd";
    return "th";
  };

  return `${dayOfWeek} ${dayOfMonth}${suffix(dayOfMonth)}`;
}
