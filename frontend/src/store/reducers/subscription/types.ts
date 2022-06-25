import { ISubscription } from "../../../types/ISubscription";

export interface SubscriptionState {
  subscriptions: ISubscription[];
}

export enum SubscriptionActionsEnum {
  SET_SUBSCRIPTIONS = "SET_SUBSCRIPTIONS",
}

export interface SetSubscriptionsAction {
  type: SubscriptionActionsEnum.SET_SUBSCRIPTIONS;
  payload: ISubscription[];
}

export type SubscriptionAction = SetSubscriptionsAction;
