import React from "react";
import { Image, Stepper } from "antd-mobile";

interface Props {
  item: any;
  stepper?: boolean;
}

const ClothItem: React.FC<Props> = ({ item, stepper }) => {
  return (
    <div className=" flex gap-20 w-full!">
      <Image
        width={72}
        height={72}
        src={item.img}
        className="bg-#F8FAFC rounded-12"></Image>
      <div className="flex flex-col gap-4 flex-1">
        <div className="text-16 fw-700 lh-22">{item.title}</div>
        <div className="text-12 fw-400 lh-16 color-#64748B">
          Size: {item.size}
        </div>
        {/* <div className="text-12 fw-400 lh-16 color-#64748B">
      Color: {item.color}
    </div> */}
        <div className="mt-auto flex justify-between w-full items-center">
          <div className="color-#0F172A text-16 fw-500 lh-22">${item.cost}</div>
          {stepper && (
            <Stepper
              min={1}
              defaultValue={1}
              className="anchor-stepper"
              style={{
                "--input-font-size": "12px",
                "--input-font-color": "#0F172AFF",
                "--border-radius": "4px",
                "--input-background-color": "transparent",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClothItem;
