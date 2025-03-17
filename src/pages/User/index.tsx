import React from "react";
import Header from "@/layouts/Header";
import profile from "@/assets/imgs/profile.png";
import { Image } from "antd-mobile";
import { ReactSVG } from "react-svg";
import orders from "@/assets/svgs/orders.svg";
import promo from "@/assets/svgs/promo.svg";
import follow from "@/assets/svgs/follow.svg";

interface Props {}

const User: React.FC<Props> = ({}) => {
  return (
    <div className="">
      <Header name="Profile"></Header>

      <div className="flex gap-17 px-24 mt-32 items-center">
        <Image
          src={profile}
          width={64}
          height={64}
          className="rounded-32"
          fit="cover"></Image>
        <div>
          <div className="text-18 fw-700 lh-26">Marion Angela</div>
          <div className="text-14 fw-400 lh-20 mt-4">
            marion.angela@mail.com
          </div>
        </div>
      </div>

      <div className="my-32 flex items-center bg-#F8FAFC py-16 mx-24 rounded-12">
        <div className="flex-1 text-center">
          <ReactSVG className="size-24 mx-auto mb-8" src={orders}></ReactSVG>
          <div className="text-label1">My Orders</div>
        </div>
        <div className="w-1 bg-#E2E8F0 h-22"></div>
        <div className="flex-1 text-center">
          <ReactSVG className="size-24 mx-auto mb-8" src={promo}></ReactSVG>
          <div className="text-label1">Promo code</div>
        </div>
        <div className="w-1 bg-#E2E8F0 h-22"></div>

        <div className="flex-1 text-center">
          <ReactSVG className="size-24 mx-auto mb-8" src={follow}></ReactSVG>
          <div className="text-label1">Following</div>
        </div>
      </div>
    </div>
  );
};

export default User;
