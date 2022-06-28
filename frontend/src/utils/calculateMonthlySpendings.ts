import { ISubscription } from "../types/ISubscription";

export default function calculateMonthlySpendings(
  subscriptions: ISubscription[]
): number {
  return subscriptions.reduce<number>(
    (acc, curr) => (curr.endDate ? acc : curr.price + acc),
    0
  );
}
