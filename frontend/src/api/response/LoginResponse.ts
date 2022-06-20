import { IUser } from "../../types/IUser";

export interface LoginResponse {
  user: IUser;
  token: string;
}
