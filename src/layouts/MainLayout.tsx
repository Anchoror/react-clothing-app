// filepath: /src/components/layouts/MainLayout.tsx
import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useAppStore } from "@/stores";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const MainLayout = () => {
  const { appName } = useAppStore();
  const [pageLoading, setPageLoading] = useState(true);
  const loadingNodeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="h-screen w-screen bg-#fff text-gray-800 font-sans text-16 m-auto overflow-x-hidden font-sans">
      <TransitionGroup>
        {pageLoading && (
          <CSSTransition
            key="index-0"
            timeout={500}
            classNames="fade"
            nodeRef={loadingNodeRef}>
            <div
              ref={loadingNodeRef}
              className="bg-[var(--primary-800)] color-corcal size-screen flex-center absolute z-100 inset-0">
              <h1 className="text-h1">{appName}</h1>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>

      <div className="min-h-[calc(100vh-var(--footer-h))]">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
