import React from "react";
import ClothCard from "./ClothCard";

interface Props {
  list: any[];
  staggered?: boolean;
}

const ClothList: React.FC<Props> = ({ list, staggered }) => {
  const items = list.map((item, index) => {
    return (
      <div
        className={`flex-basis-1/3 flex-grow-1 mb-16 ${
          staggered && index % 2 === 1 && "translate-y-24"
        }`}
        key={index}>
        <ClothCard data={item} type={2}></ClothCard>
      </div>
    );
  });

  return <div className="flex gap-8 flex-wrap px-24 pb-40">{items}</div>;
};

export default ClothList;
