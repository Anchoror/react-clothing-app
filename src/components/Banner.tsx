import React, { useRef, useState, useEffect } from "react";
import { Swiper, Image } from "antd-mobile";
// import woman3 from "@/assets/imgs/woman3.png";
import adv from "@/assets/videos/01.mp4";

interface Props {
  list: any[];
}

const Banner: React.FC<Props> = ({ list }) => {
  const [index, setIndex] = useState(0);
  const onIndexChange = (i: number) => {
    setIndex(i);
  };

  const onTouchStart = () => {
    console.log("touchStart");
  };
  const onTouchEnd = () => {
    console.log("onTouchEnd");
  };

  const items = list.map((_, i) => (
    <Swiper.Item key={i}>
      <SlideItem src={adv} isActive={index === i} />
    </Swiper.Item>
  ));

  return (
    <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <Swiper
        indicator={() => null}
        defaultIndex={index}
        onIndexChange={onIndexChange}>
        {items}
      </Swiper>
    </div>
  );
};

const SlideItem: React.FC<{ src: string; isActive: boolean }> = ({
  src,
  isActive,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isActive]);

  return (
    <div className="w-full aspect-ratio-375/200 relative">
      <div className="text-h3 color-#fff text-wrap w-178 absolute top-40 x-center text-center z-4">
        New Winter 2021 collections.
      </div>
      <div className="color-#fff text-14 fw-700 lh-20 absolute top-130 x-center z-4">
        Shop Now
      </div>
      <video
        ref={videoRef}
        className="block w-full absolute top--94 z-1"
        muted
        loop
        playsInline
        src={src}
      />
      <div className="absolute inset-0 bg-#0F172A3F z-2" />
    </div>
  );
};
export default Banner;
