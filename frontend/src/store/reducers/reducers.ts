import authReducer from "./auth/auth";
import subscriptionReducer from "./subscription/subscription";

const reducers = {
  auth: authReducer,
  subscription: subscriptionReducer,
};

export default reducers;
