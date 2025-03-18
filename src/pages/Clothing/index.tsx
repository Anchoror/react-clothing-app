import React from "react";
import Header from "@/layouts/Header";
import Title from "@/layouts/Title";
import CategorySwiper from "@/components/CategorySwiper";
import { Badge } from "antd-mobile";
import { SearchOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores";
import { ReactSVG } from "react-svg";
import CardListWrap from "@/components/CardListWrap";

import cloth1 from "@/assets/imgs/cloth1.png";
import cloth2 from "@/assets/imgs/cloth2.png";
import cloth3 from "@/assets/imgs/cloth3.png";
import cloth4 from "@/assets/imgs/cloth4.png";
import cloth5 from "@/assets/imgs/cloth5.png";
// import cloth6 from "@/assets/imgs/cloth6.png";
import brand1 from "@/assets/imgs/brand1.png";
import brand2 from "@/assets/imgs/brand2.png";
import brand3 from "@/assets/imgs/brand3.png";
import brand4 from "@/assets/imgs/brand4.png";
import brand5 from "@/assets/imgs/brand5.png";
import brand6 from "@/assets/imgs/brand6.png";
import brand7 from "@/assets/imgs/brand7.png";
import brand8 from "@/assets/imgs/brand8.png";
import bag from "@/assets/svgs/bag.svg";

interface Props {}

const Clothing: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { notificationsCount } = useAppStore();
  const toSearch = () => {
    navigate("/searching");
  };

  const list = [
    {
      id: 1,
      name: "Zara",
      img: brand1,
    },
    {
      id: 2,
      name: "Nike",
      img: brand2,
    },
    {
      id: 3,
      name: "H&M",
      img: brand3,
    },
    {
      id: 4,
      name: "Gucci",
      img: brand4,
    },
    {
      id: 5,
      name: "Dior",
      img: brand5,
    },
    {
      id: 6,
      name: "Asos",
      img: brand6,
    },
    {
      id: 7,
      name: "Ellesse",
      img: brand7,
    },
    {
      id: 8,
      name: "Weekday",
      img: brand8,
    },
  ];

  const clothList = new Array(10).fill(0).map((_, index) => ({
    id: index,
    title: "Basic High Dpstr",
    oldCost: "69.90",
    cost: "49.00",
    isLoved: false,
    examples: [
      {
        img: cloth3,
        color: "#6d5441",
        id: 3,
      },
      {
        img: cloth2,
        color: "#d2b09b",
        id: 2,
      },

      {
        img: cloth1,
        color: "#ededee",
        id: 1,
      },
      {
        img: cloth4,
        color: "#544c2f",
        id: 4,
      },
      {
        img: cloth5,
        color: "#121613",
        id: 5,
      },
    ],
    category: "clothing",
    brand: "Nike",
    stock: "10,000",
  }));

  return (
    <div>
      <Header name="Clothing">
        <SearchOutline className="block" fontSize={24} onClick={toSearch} />
        <Badge
          content={
            notificationsCount ? (
              <div className="size-8 rounded-50% bg-#EB6383 b-solid b-1 b-#fff"></div>
            ) : (
              ""
            )
          }
          style={{ "--right": "3px", "--top": "8px" }}
          color="transparent">
          <ReactSVG src={bag} className="size-24 anchor-svg"></ReactSVG>
        </Badge>
      </Header>

      <Title
        value="Trending brands"
        extra={
          <div className="text-14 fw-500 lh-20 color-primary">view more</div>
        }
      />

      <CategorySwiper type={2} list={list} />

      <CardListWrap data={clothList}></CardListWrap>
    </div>
  );
};

export default Clothing;
