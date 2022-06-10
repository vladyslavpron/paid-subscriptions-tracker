import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

const AppRouter = () => {
  const auth = false;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
      <Route
        path="*"
        element={<Navigate replace to={RouteNames.DASHBOARD} />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.MAIN} />} />
    </Routes>
  );
};

export default AppRouter;
