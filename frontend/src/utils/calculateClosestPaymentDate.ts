import moment from "moment";
import { ISubscription } from "../types/ISubscription";

export default function calculateClosestPaymentDate(
  subscriptions: ISubscription[]
): number {
  const currentDate = moment();
  const today = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  let leastDiff = Infinity;
  subscriptions.forEach((sub) => {
    const date = moment(sub.startDate);
    date.year(currentYear);
    if (date.date() < today) {
      date.month(currentMonth + 1);
    } else {
      date.month(currentMonth);
    }
    const diff = date.diff(currentDate, "days");
    if (diff && diff < leastDiff) {
      leastDiff = diff;
    }
  });
  return leastDiff;
}
