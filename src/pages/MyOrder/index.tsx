import React from "react";
import SubHeader from "@/layouts/SubHeader";
import { UnorderedListOutline } from "antd-mobile-icons";
import { CapsuleTabs } from "antd-mobile";
import cloth2 from "@/assets/imgs/cloth2.png";
import { ReactSVG } from "react-svg";
import ClothItem from "@/components/ClothItem";
import checked from "@/assets/svgs/checked.svg";

interface Props {}

const list = [
  {
    id: 1,
    img: cloth2,
    title: "Elbow Patch Blazer",
    size: "M",
    color: "pink",
    cost: "149.00",
    count: 1,
    brand: "Nike",
  },
  {
    id: 2,
    img: cloth2,
    title: "Elbow Patch Blazer",
    size: "M",
    color: "pink",
    cost: "149.00",
    count: 1,
    brand: "Nike",
  },
  {
    id: 3,
    img: cloth2,
    title: "Elbow Patch Blazer",
    size: "M",
    color: "pink",
    cost: "149.00",
    count: 1,
    brand: "ZARA",
  },
  {
    id: 4,
    img: cloth2,
    title: "Elbow Patch Blazer",
    size: "M",
    color: "pink",
    cost: "149.00",
    count: 1,
    brand: "ZARA",
  },
  {
    id: 5,
    img: cloth2,
    title: "Elbow Patch Blazer",
    size: "M",
    color: "pink",
    cost: "149.00",
    count: 1,
    brand: "ZARA",
  },
  {
    id: 6,
    img: cloth2,
    title: "Elbow Patch Blazer",
    size: "M",
    color: "pink",
    cost: "149.00",
    count: 1,
    brand: "ZARA",
  },
];

const MyOrder: React.FC<Props> = () => {
  return (
    <div>
      <SubHeader title="My Order" back>
        <UnorderedListOutline fontSize={20} />
      </SubHeader>

      <CapsuleTabs className="anchor-capsuletabs">
        <CapsuleTabs.Tab title="All order" key="1" />
        <CapsuleTabs.Tab title="Processed" key="2" />
        <CapsuleTabs.Tab title="Sent" key="3" />
        <CapsuleTabs.Tab title="Arrived" key="4" />
        <CapsuleTabs.Tab title="Complained" key="5" />
      </CapsuleTabs>

      <div className="px-24 mt-24">
        {list.map((item) => {
          return (
            <div className="mb-24" key={item.id}>
              <div className="flex justify-between mb-22">
                <div className="text-16 fw-700 lh-22 flex items-center gap-4">
                  <ReactSVG
                    src={checked}
                    className="anchor-svg inline-block"></ReactSVG>
                  <span>ZARA</span>
                </div>
                <div className="color-#FFC947 text-14 fw-500 lh-20">
                  In Progress
                </div>
              </div>

              <ClothItem item={item}></ClothItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrder;
