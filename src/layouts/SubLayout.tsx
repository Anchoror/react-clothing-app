// filepath: /src/components/layouts/SubLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import SubHeader from "./SubHeader";
const SubLayout = () => {
  return (
    <div className="h-screen w-screen bg-#fff text-gray-800 font-sans text-16 m-auto overflow-x-hidden font-sans">
      <SubHeader back></SubHeader>
      <div className="min-h-[calc(100vh-var(--header-h))]">
        <Outlet />
      </div>
    </div>
  );
};

export default SubLayout;
