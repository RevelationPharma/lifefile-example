import { formatDate } from "date-fns/format";

export const Datetime = ({ date }: { date: string }) => {
  if (!date) {
    return null;
  }
  const short = formatDate(date, "yyyy-MM-dd");
  const full = formatDate(date, "yyyy-MM-dd HH:mm:ss");

  return (
    <time title={full} dateTime={date}>
      {short}
    </time>
  );
};
