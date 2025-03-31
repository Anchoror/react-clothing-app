// filepath: /src/components/layouts/SubLayout.tsx
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SubHeader from "./SubHeader";
import { useLocation } from "react-router-dom";
import { useAppStore } from "@/stores";
const SubLayout = () => {
  const { pageTitle, setPageTitle } = useAppStore();
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById("app").scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname, setPageTitle]);
  return (
    <div
      id="app"
      className="h-screen w-screen bg-#fff text-gray-800 font-sans text-16 m-auto overflow-x-hidden font-sans">
      <SubHeader back title={pageTitle}></SubHeader>
      <div className="min-h-[calc(100vh-var(--header-h))]">
        <Outlet />
      </div>
    </div>
  );
};

export default SubLayout;
