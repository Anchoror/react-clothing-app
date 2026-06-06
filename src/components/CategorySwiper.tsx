import React, { useEffect, useState } from "react";
import { Swiper, Image, Badge } from "antd-mobile";

interface Props {
  list: { id: number; img: string; name: string; isNew?: boolean }[];
  type: 1 | 2;
  showActived?: boolean;
  onItemClick?: () => void;
}

const CategorySwiper: React.FC<Props> = ({
  list,
  showActived = false,
  onItemClick = () => {},
}) => {
  const [activedId, setActivedId] = useState(0);

  useEffect(() => {
    setActivedId(list[0].id);
  }, [list]);

  const onClick = (item: { id: number; img: string; name: string; isNew?: boolean }) => {
    setActivedId(item.id);
    onItemClick();
  };

  const items = list.map((item) => {
    return (
      <Swiper.Item key={item.id} className="px-8">
        <div className="w-full" onClick={() => onClick(item)}>
          <div className="px-9 py-4 relative">
            <Badge
              content={item.isNew ? "new" : ""}
              bordered
              style={{
                "--right": "4px",
                "--top": "6px",
              }}>
              <Image
                src={item.img}
                fit="contain"
                className="w-full aspect-ratio-1/1 rounded-50% bg-#F8FAFC p-8"
                style={{
                  outline:
                    showActived && item.id === activedId
                      ? "1px solid var(--primary-color)"
                      : "",
                }}></Image>
            </Badge>
          </div>

          <div
            className="text-12 fw-500 lh-16 color-#0F172A text-center"
            style={{
              color:
                showActived && item.id === activedId
                  ? "var(--primary-color)"
                  : "",
            }}>
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
