import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes, type RouteConfig } from "@/config/routes";

const renderRoutes = (routes: RouteConfig[]) =>
  routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));

const App: React.FC = () => {
  return <Routes>{renderRoutes(routes)}</Routes>;
};

export default App;
