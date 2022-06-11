import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";

export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export enum RouteNames {
  MAIN = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, element: <Main /> },
  { path: RouteNames.LOGIN, element: <Login /> },
  { path: RouteNames.REGISTER, element: <Register /> },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.DASHBOARD, element: <Dashboard /> },
];
