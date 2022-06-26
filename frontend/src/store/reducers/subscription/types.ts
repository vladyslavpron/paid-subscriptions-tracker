import { ISubscription } from "../../../types/ISubscription";

export interface SubscriptionState {
  subscriptions: ISubscription[];
  error: string;
  isLoading: boolean;
}

export enum SubscriptionActionsEnum {
  SET_SUBSCRIPTIONS = "SET_SUBSCRIPTIONS",
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
  ADD_SUBSCRIPTION = "ADD_SUBSCRIPTION",
}

export interface SetSubscriptionsAction {
  type: SubscriptionActionsEnum.SET_SUBSCRIPTIONS;
  payload: ISubscription[];
}

export interface SetErrorAction {
  type: SubscriptionActionsEnum.SET_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: SubscriptionActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface AddSubscriptionAction {
  type: SubscriptionActionsEnum.ADD_SUBSCRIPTION;
  payload: ISubscription;
}

export type SubscriptionAction =
  | SetSubscriptionsAction
  | SetErrorAction
  | SetIsLoadingAction
  | AddSubscriptionAction;
