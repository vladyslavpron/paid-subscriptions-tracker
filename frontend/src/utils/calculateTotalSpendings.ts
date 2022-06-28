import moment from "moment";
import { ISubscription } from "../types/ISubscription";

export default function calculateTotalSpendings(
  subscriptions: ISubscription[]
): number {
  const currentDate = moment();
  let sum = 0;
  subscriptions.forEach((sub) => {
    const months =
      (sub.endDate
        ? moment(sub.endDate).diff(moment(sub.startDate), "M")
        : currentDate.diff(moment(sub.startDate), "M")) || 1;
    sum += sub.price * months;
  });
  return sum;
}
