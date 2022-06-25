import {
  SubscriptionAction,
  SubscriptionActionsEnum,
  SubscriptionState,
} from "./types";

const initialState: SubscriptionState = {
  subscriptions: [],
};

export default function subscriptionReducer(
  state: SubscriptionState = initialState,
  action: SubscriptionAction
) {
  switch (action.type) {
    case SubscriptionActionsEnum.SET_SUBSCRIPTIONS:
      return { ...state, subscriptions: action.payload };
    default:
      return state;
  }
}
