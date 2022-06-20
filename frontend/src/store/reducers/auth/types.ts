import { IUser } from "../../../types/IUser";

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = "SET_ERROR",
}

export type AuthAction =
  | SetIsAuthAction
  | SetUserAction
  | SetIsLoadingAction
  | SetErrorAction;

export interface SetIsAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}

export interface SetUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: IUser;
}

export interface SetIsLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: string;
}
