import React, { useState } from "react";
import ClothCard from "./ClothCard";
import { InfiniteScroll } from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";

interface Props {
  list: any[];
  staggered?: boolean;
}

const ClothList: React.FC<Props> = ({ list, staggered }) => {
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<any[]>(list);

  const loadMore = async () => {
    await sleep(2000);
    const append = list;
    setData((val) => [...val, ...append]);
    setHasMore(append.length > 0);
  };

  const items = data.map((item, index) => {
    return (
      <div
        className={`flex-basis-1/3 flex-grow-1 mb-16 ${
          staggered && index % 2 === 1 && "translate-y-18"
        }`}
        key={index}>
        <ClothCard data={item} type={2}></ClothCard>
      </div>
    );
  });

  return (
    <div className="pb-40">
      <div className="flex gap-8 flex-wrap px-24">{items}</div>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};

export default ClothList;
