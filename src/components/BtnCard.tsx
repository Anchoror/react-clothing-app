import React from "react";
import { Button, Image } from "antd-mobile";
import cloth3 from "@/assets/imgs/cloth3.png";

interface Props {}

const BtnCard: React.FC<Props> = ({}) => {
  return (
    <div className="bg-#FFF2E6 rounded-12 p-20 relative overflow-hidden m-24">
      <div className="color-sub-primary">
        <div className="text-16 fw-700 lh-22">You’ll Love These</div>
        <div className="text-12 fw-400 lh-16 mt-4">
          Check out your recommendations
        </div>

        <Button
          color="primary"
          fill="solid"
          className="h-32! w-92! p-0! rounded-8! mt-20!"
          block>
          <span className="text-12 fw-500 lh-16">Explore</span>
        </Button>
      </div>
      <Image
        className="absolute top--24 right--18"
        width={158}
        height={236}
        fit="contain"
        src={cloth3}></Image>
    </div>
  );
};

export default BtnCard;
