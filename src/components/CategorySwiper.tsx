import React, { useEffect } from "react";
import { Swiper, Image } from "antd-mobile";

interface Props {
  list: Array<any>;
  type: 1 | 2;
}

const CategorySwiper: React.FC<Props> = ({ list }) => {
  useEffect(() => {}, [list]);

  const items = list.map((item) => {
    return (
      <Swiper.Item key={item.id} className="px-8">
        <div className="w-full">
          <div className="px-9 pb-10 pt-2">
            <Image
              src={item.img}
              fit="contain"
              className="w-full aspect-ratio-1/1 rounded-50% bg-#F8FAFC p-8"></Image>
          </div>

          <div className="text-12 fw-500 lh-16 color-#0F172A text-center">
            {item.name}
          </div>
        </div>
      </Swiper.Item>
    );
  });

  return (
    <Swiper
      indicator={() => null}
      slideSize={25}
      className="mx--8 w-[calc(100%+16px)]!"
      style={{
        "--track-padding": "0 24px",
      }}>
      {items}
    </Swiper>
  );
};

export default CategorySwiper;
