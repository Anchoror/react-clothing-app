import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { routes, type RouteConfig } from "@/config/routes";

import { useAppStore } from "@/stores";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const renderRoutes = (routes: RouteConfig[]) =>
  routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));

const App: React.FC = () => {
  const { appName, pageLoading, closePageLoading } = useAppStore();
  const loadingNodeRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pageLoading) {
      closePageLoading();
    }
    document.getElementById("app").scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [closePageLoading, pathname]);
  return (
    <>
      <TransitionGroup>
        {pageLoading && (
          <CSSTransition
            key="index-0"
            timeout={500}
            classNames="fade"
            nodeRef={loadingNodeRef}>
            <div
              ref={loadingNodeRef}
              className="bg-[var(--primary-800)] color-corcal size-screen flex-center absolute z-10000 inset-0">
              <h1 className="text-h1">{appName}</h1>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
      <Routes>{renderRoutes(routes)}</Routes>
    </>
  );
};

export default App;
