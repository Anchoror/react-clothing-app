import React, { useState } from "react";
import { Image, Button } from "antd-mobile";
import { HeartOutline, HeartFill } from "antd-mobile-icons";

interface Props {
  data: any;
  type: 1 | 2;
}

const ClothCard: React.FC<Props> = ({ data, type }) => {
  const [isLoved, setIsLoved] = useState(data.isLoved);

  return (
    <div className="rounded-t-12 overflow-hidden pb-2 w-full relative">
      <Image
        src={data.img}
        fit="cover"
        className="bg-#F8FAFC w-full aspect-ratio-145/162"></Image>

      <div className={type === 1 ? "mt-10" : "flex justify-between mt-16"}>
        <div className="text-label1 color-#0F172A">{data.title}</div>

        <div className="flex gap-8">
          {type === 1 && data.oldCost && (
            <div className="discount-cost">${data.oldCost}</div>
          )}
          <div className="text-label1 color-primary">${data.cost}</div>
        </div>
      </div>

      <Button
        className="absolute! top-12 right-12 bg-#fff! p-0! rounded-50% size-24!"
        fill="none"
        size="mini"
        onClick={() => setIsLoved(!isLoved)}>
        {isLoved ? (
          <HeartFill className="block mx-auto size-12 color-#EB6383" />
        ) : (
          <HeartOutline className="block mx-auto size-12" />
        )}
      </Button>
    </div>
  );
};

export default ClothCard;
