import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  console.log(isAuth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route
        path="*"
        element={<Navigate replace to={RouteNames.DASHBOARD} />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.MAIN} />} />
    </Routes>
  );
};

export default AppRouter;
