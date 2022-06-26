import {
  SubscriptionAction,
  SubscriptionActionsEnum,
  SubscriptionState,
} from "./types";

const initialState: SubscriptionState = {
  subscriptions: [],
  error: "",
  isLoading: false,
};

export default function subscriptionReducer(
  state: SubscriptionState = initialState,
  action: SubscriptionAction
) {
  switch (action.type) {
    case SubscriptionActionsEnum.SET_SUBSCRIPTIONS:
      return { ...state, subscriptions: action.payload };
    case SubscriptionActionsEnum.SET_ERROR:
      return { ...state, error: action.payload };
    case SubscriptionActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SubscriptionActionsEnum.ADD_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload],
      };

    default:
      return state;
  }
}
