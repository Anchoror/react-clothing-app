import React from "react";
import { ReactSVG } from "react-svg";
import rootSvg from "@/assets/svgs/root.svg";
import backSvg from "@/assets/svgs/back.svg";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores";

interface Props {
  back?: boolean;
  root?: boolean;
  title?: string;
  children?: React.ReactNode;
}
const SubHeader: React.FC<Props> = ({ back, root, title, children }) => {
  const navigate = useNavigate();
  const { pageTitle } = useAppStore();

  return (
    <header className="header-h sticky top-0 lh-[var(--header-h)] flex items-center justify-between gap-12 bg-#fff color-#0F172A">
      <div className="text-h3 ml-24">
        {root && (
          <ReactSVG
            className="size-28"
            src={rootSvg}
            onClick={() => navigate("/")}></ReactSVG>
        )}
        {back && (
          <ReactSVG
            className="size-28"
            src={backSvg}
            onClick={() => navigate(-1)}></ReactSVG>
        )}
      </div>
      <div className="absolute x-center">{title || pageTitle}</div>
      <div className="mr-24 flex gap-16 py-18 header-h">{children}</div>
    </header>
  );
};

export default SubHeader;
