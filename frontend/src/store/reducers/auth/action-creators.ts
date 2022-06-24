import axios from "axios";
import API from "../../../api/api";
import { IUser } from "../../../types/IUser";
import { AppDispatch } from "../../store";
import {
  AuthActionsEnum,
  SetErrorAction,
  SetIsAuthAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";

export const AuthActionCreators = {
  setIsAuth: (auth: boolean): SetIsAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await API.login(email, password);
      dispatch(AuthActionCreators.setIsLoading(false));
      dispatch(AuthActionCreators.setIsAuth(true));
      dispatch(AuthActionCreators.setUser(response.data.user));

      // console.log(response.data.user);
      //   console.log(email, password);
    } catch (e) {
      console.log(e);
      dispatch(AuthActionCreators.setIsLoading(false));
      dispatch(AuthActionCreators.setError("errorrr???"));
    }
  },

  verifyUser: () => async (dispatch: AppDispatch) => {
    try {
      const response = await API.verify();
      dispatch(AuthActionCreators.setIsAuth(true));
      dispatch(AuthActionCreators.setUser(response.data.user));
    } catch (e) {
      console.log(e);
    }
  },

  logout: () => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setUser({} as IUser));
    await API.logout();
  },
};
