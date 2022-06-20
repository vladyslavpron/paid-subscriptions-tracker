import { IUser } from "../../../types/IUser";
import { AuthAction, AuthActionsEnum, AuthState } from "./types";

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: "",
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionsEnum.SET_USER:
      return { ...state, isLoading: false, error: "", user: action.payload };
    case AuthActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
