import { ISubscription } from "../../../types/ISubscription";
import { SetSubscriptionsAction, SubscriptionActionsEnum } from "./types";

export const SubscriptionActionCreators = {
  setSubscriptions: (
    subscriptions: ISubscription[]
  ): SetSubscriptionsAction => ({
    type: SubscriptionActionsEnum.SET_SUBSCRIPTIONS,
    payload: subscriptions,
  }),
};
