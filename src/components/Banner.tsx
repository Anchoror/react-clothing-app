import React from "react";
import { Swiper, Image } from "antd-mobile";
import woman3 from "@/assets/imgs/woman3.png";

interface Props {
  list: any[];
}

const Banner: React.FC<Props> = ({ list }) => {
  const items = list.map((item, index) => {
    return (
      <Swiper.Item key={index}>
        <div className="w-full aspect-ratio-375/200 relative">
          <div className="text-h3 color-#fff text-wrap w-178 absolute top-40 x-center text-center z-4">
            New Winter 2021 collections.
          </div>
          <div className="color-#fff text-14 fw-700 lh-20 absolute top-130 x-center z-4">
            Shop Now
          </div>

          <Image className="absolute top--84 left-0 z-1" src={woman3} />

          <div className="absolute inset-0 bg-#0F172A3F z-2"></div>
        </div>
      </Swiper.Item>
    );
  });

  console.log(items);

  return <Swiper indicator={() => null}>{items}</Swiper>;
};

export default Banner;
