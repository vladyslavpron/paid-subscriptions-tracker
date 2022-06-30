export interface ISubscription {
  id: number;
  title: string;
  price: number;
  startDate: string;
  endDate: string | null;
}
