// filepath: /src/components/layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Auth from "./Auth";
const MainLayout = () => {
  return (
    <div
      id="app"
      className="h-screen w-screen bg-#fff text-gray-800 font-sans text-16 m-auto overflow-x-hidden font-sans">
      <div className="min-h-[calc(100vh-var(--footer-h))]">
        <Auth>
          <Outlet />
        </Auth>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
