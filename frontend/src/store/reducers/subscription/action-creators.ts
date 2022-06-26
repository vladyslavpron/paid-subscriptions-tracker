import API from "../../../api/api";
import { ISubscription } from "../../../types/ISubscription";
import { AppDispatch } from "../../store";
import {
  AddSubscriptionAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetSubscriptionsAction,
  SubscriptionActionsEnum,
} from "./types";

export const SubscriptionActionCreators = {
  setSubscriptions: (
    subscriptions: ISubscription[]
  ): SetSubscriptionsAction => ({
    type: SubscriptionActionsEnum.SET_SUBSCRIPTIONS,
    payload: subscriptions,
  }),

  setError: (error: string): SetErrorAction => ({
    type: SubscriptionActionsEnum.SET_ERROR,
    payload: error,
  }),

  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: SubscriptionActionsEnum.SET_IS_LOADING,
    payload: isLoading,
  }),

  addSubscription: (subscription: ISubscription): AddSubscriptionAction => ({
    type: SubscriptionActionsEnum.ADD_SUBSCRIPTION,
    payload: subscription,
  }),

  fetchSubscriptions: () => async (dispatch: AppDispatch) => {
    dispatch(SubscriptionActionCreators.setIsLoading(true));
    try {
      const response = await API.getUserSubscriptions();
      dispatch(SubscriptionActionCreators.setSubscriptions(response.data));
      dispatch(SubscriptionActionCreators.setIsLoading(false));
    } catch (err: any) {
      dispatch(SubscriptionActionCreators.setIsLoading(false));
      dispatch(
        SubscriptionActionCreators.setError(
          err.response.data.message || err.message
        )
      );
    }
  },

  createSubscription:
    (subscription: ISubscription) => async (dispatch: AppDispatch) => {
      try {
        const response = await API.createUserSubscription(subscription);
        dispatch(SubscriptionActionCreators.addSubscription(response.data));
      } catch (err: any) {
        dispatch(SubscriptionActionCreators.setIsLoading(false));
        dispatch(
          SubscriptionActionCreators.setError(
            err.response.data.message || err.message
          )
        );
      }
    },
};
