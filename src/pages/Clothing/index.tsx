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
import category1 from "@/assets/imgs/category/category1.png";
import category2 from "@/assets/imgs/category/category2.png";
import category3 from "@/assets/imgs/category/category3.png";
import category4 from "@/assets/imgs/category/category4.png";
import category5 from "@/assets/imgs/category/category5.png";
import category6 from "@/assets/imgs/category/category6.png";
import category7 from "@/assets/imgs/category/category7.png";
import category8 from "@/assets/imgs/category/category8.png";
import category9 from "@/assets/imgs/category/category9.png";
import category10 from "@/assets/imgs/category/category10.png";
import category11 from "@/assets/imgs/category/category11.png";
import category12 from "@/assets/imgs/category/category12.png";
import category13 from "@/assets/imgs/category/category13.png";
import category14 from "@/assets/imgs/category/category14.png";

import bag from "@/assets/svgs/bag.svg";

const Clothing: React.FC = () => {
  const navigate = useNavigate();
  const { notificationsCount } = useAppStore();
  const toSearch = () => {
    navigate("/searching");
  };

  const list = [
    {
      id: 1,
      name: "Sweater",
      img: category1,
      isNew: true,
    },
    {
      id: 2,
      name: "Blouse",
      img: category2,
      isNew: true,
    },
    {
      id: 3,
      name: "Teddy Coat",
      img: category3,
      isNew: true,
    },
    {
      id: 4,
      name: "Blazer",
      img: category4,
    },
    {
      id: 5,
      name: "Puffer Jacket",
      img: category5,
    },
    {
      id: 6,
      name: "Overcoat",
      img: category6,
    },
    {
      id: 7,
      name: "Casual Pants",
      img: category7,
    },
    {
      id: 8,
      name: "Culottes",
      img: category8,
    },
    {
      id: 9,
      name: "Mini Skirt",
      img: category9,
    },
    {
      id: 10,
      name: "Slip Dress",
      img: category10,
    },
    {
      id: 11,
      name: "Midi Skirt",
      img: category11,
    },
    {
      id: 12,
      name: "Accessories",
      img: category12,
    },
    {
      id: 13,
      name: "Shoes",
      img: category13,
    },
    {
      id: 14,
      name: "Bag",
      img: category14,
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
        value="All Category"
        // extra={
        //   <div className="text-14 fw-500 lh-20 color-primary">view more</div>
        // }
      />

      <CategorySwiper type={2} list={list} showActived />

      <CardListWrap data={clothList}></CardListWrap>
    </div>
  );
};

export default Clothing;
