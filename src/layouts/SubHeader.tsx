import React from "react";
import { ReactSVG } from "react-svg";
import rootSvg from "@/assets/svgs/root.svg";
import backSvg from "@/assets/svgs/back.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppStore } from "@/stores";

interface Props {
  back?: boolean;
  root?: boolean;
}
const SubHeader: React.FC<Props> = ({ back, root }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pageTitle } = useAppStore();

  console.log(location);
  return (
    <header className="header-h relative lh-[var(--header-h)] flex items-center justify-between gap-12 bg-#fff color-#0F172A">
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
      <div className="absolute x-center">{pageTitle}</div>
      <div className="mr-24 flex gap-16 py-18 header-h"></div>
    </header>
  );
};

export default SubHeader;
