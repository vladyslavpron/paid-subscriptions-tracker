import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Main from "../pages/Main";

export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export enum RouteNames {
  MAIN = "/",
  LOGIN = "/login",
  DASHBOARD = "/dashboard",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, element: <Main /> },
  { path: RouteNames.LOGIN, element: <Login /> },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.DASHBOARD, element: <Dashboard /> },
];
