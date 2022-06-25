export interface ISubscription {
  id: number;
  title: string;
  price: number;
  startDate: Date;
  endDate: Date | null;
}
