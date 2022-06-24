import axios, { AxiosResponse } from "axios";
import { IUser } from "../types/IUser";
import { LoginResponse } from "./response/LoginResponse";

const API_URL = "http://localhost:3001/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default class API {
  static login(
    email: string,
    password: string
  ): Promise<AxiosResponse<LoginResponse>> {
    return $api.post("/auth/login", {
      email,
      password,
    });
  }

  static async register(user: IUser): Promise<AxiosResponse<LoginResponse>> {
    return $api.post("/auth/register", { ...user });
  }

  static async verify(): Promise<AxiosResponse<LoginResponse>> {
    return $api.get("/auth/verify");
  }

  static async logout(): Promise<AxiosResponse<void>> {
    return $api.post("/auth/logout");
  }
}
