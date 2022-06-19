export interface AuthState {
  auth: boolean;
}

export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
}

export type AuthAction = SetAuthAction;
// | SetUserAction...

export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}

const initialState: AuthState = {
  auth: false,
  //   user: null,
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
}
