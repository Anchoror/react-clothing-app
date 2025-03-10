import React, { useEffect } from "react";
import { Swiper } from "antd-mobile";

import ClothCard from "./ClothCard";

interface Props {
  list: Array<any>;
}

const SwiperBar: React.FC<Props> = ({ list }) => {
  useEffect(() => {}, [list]);

  const items = list.map((item) => {
    return (
      <Swiper.Item key={item.id} className="px-8">
        <ClothCard data={item} type={1}></ClothCard>
      </Swiper.Item>
    );
  });

  return (
    <Swiper
      indicator={() => null}
      slideSize={42}
      className="mx--8 w-[calc(100%+16px)]!"
      style={{
        "--track-padding": "0 24px",
      }}>
      {items}
    </Swiper>
  );
};

export default SwiperBar;
