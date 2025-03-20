import React from "react";
import { Button } from "antd-mobile";
import { ReactSVG } from "react-svg";
interface Props {
  svg: string;
  btnText: string;
  to?: string;
  title: string;
  subTitle: string;
}

const EmptyPage: React.FC<Props> = ({ svg, btnText, to, title, subTitle }) => {
  return (
    <div className="px-45 py-16 text-center">
      <ReactSVG src={svg} className="min-w-134 mt-112 mx-auto"></ReactSVG>

      <div className="text-h2">{title}</div>

      <div className="text-content2 text-center mt-8 flex-1">{subTitle}</div>

      <div className="fixed bottom-24 left-0 right-0 px-24">
        <Button
          color="primary"
          fill="solid"
          className="h-56!"
          block
          onClick={() => {
            console.log(to);
          }}>
          <span className="text-16 fw-700 lh-22">{btnText}</span>
        </Button>
      </div>
    </div>
  );
};

export default EmptyPage;
