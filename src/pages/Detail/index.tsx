import React, { useEffect } from "react";
import { FloatingPanel, Image, Button, Swiper, ProgressBar } from "antd-mobile";
import cloth3 from "@/assets/imgs/cloth3.png";
import brand1 from "@/assets/imgs/brand1.png";
import { useAppStore } from "@/stores";

interface Props {}

const imgs = [
  {
    id: 1,
    img: cloth3,
  },
  {
    id: 2,
    img: cloth3,
  },
  {
    id: 3,
    img: cloth3,
  },
  {
    id: 4,
    img: cloth3,
  },
];

const Detail: React.FC<Props> = () => {
  const anchors = [100, 360, window.innerHeight * 0.8];
  const [sizeValue, setSizeValue] = React.useState("XS");
  const { setPageTitle } = useAppStore();

  useEffect(() => {
    setPageTitle("Detail");
  }, []);

  const images = imgs.map((item) => {
    return (
      <Swiper.Item key={item.id}>
        <Image src={item.img} fit="contain" width="100%" height="100%" />
      </Swiper.Item>
    );
  });

  return (
    <div className="relative bg-#F8FAFC h-[calc(100vh-var(--header-h))]">
      <Swiper
        className="size-full!"
        indicator={(total, current) => (
          <ProgressBar
            percent={((current + 1) / total) * 100}
            className="absolute top-8 x-center w-120"
            style={{
              "--track-width": "3px",
            }}
          />
        )}>
        {images}
      </Swiper>
      <div></div>

      <FloatingPanel anchors={anchors}>
        <div className="px-24 py-18">
          <div className="text-18 fw-700 lh-25 flex justify-between mb-12">
            <div className="color-#0F172A">Elbow Patch Blazer</div>
            <div className="color-primary">$149.00</div>
          </div>

          <div className="text-content3 mb-24">
            Blazer made with wool blend fabric. Lapel collar and long sleeves.
            Front flap pockets and welt pocket at chies. Interior Lining. Front
            button closure.
          </div>
          <div className="flex gap-12 mb-24">
            <Image
              src={brand1}
              className="size-40! rounded-20 p-6 bg-#F8FAFC"
              fit="contain"></Image>
            <div>
              <div className="text-14 fw-700 lh-20">ZARA</div>
              <div className="text-content3">@zara.official</div>
            </div>
            <Button
              className="ml-auto! h-40! bg-#F8FAFC! color-#0F172A! rounded-12! text-12!"
              fill="none">
              Follow
            </Button>
          </div>

          <div className="flex gap-12">
            {["XS", "S", "M", "L", "XL"].map((item) => {
              return (
                <div
                  key={item}
                  className={`size-40 rounded-20 color-#0F172A! flex items-center justify-center b-1 b-solid b-transparent ${
                    sizeValue === item ? "b-#0F172A!" : ""
                  }`}
                  onClick={() => setSizeValue(item)}>
                  {item}
                </div>
              );
            })}

            <div className="text-14 underline color-primary lh-40">
              Size guide
            </div>
          </div>

          <Button
            color="primary"
            block
            fill="solid"
            className="h-56! mt-30!"
            onClick={() => {}}>
            <span className="text-16 fw-700 lh-22">Add to bag</span>
          </Button>
        </div>
      </FloatingPanel>
    </div>
  );
};

export default Detail;
