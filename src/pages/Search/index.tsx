import React from "react";
import Header from "@/layouts/Header";
import { SearchOutline } from "antd-mobile-icons";
import Title from "@/layouts/Title";
import CategorySwiper from "@/components/CategorySwiper";
import ClothSwiper from "@/components/ClothSwiper";
import BtnCard from "@/components/BtnCard";

import cloth1 from "@/assets/imgs/cloth1.png";
import cloth2 from "@/assets/imgs/cloth2.png";
import cloth3 from "@/assets/imgs/cloth3.png";
import cloth4 from "@/assets/imgs/cloth4.png";
import cloth5 from "@/assets/imgs/cloth5.png";
import cloth6 from "@/assets/imgs/cloth6.png";
import brand1 from "@/assets/imgs/brand1.png";
import brand2 from "@/assets/imgs/brand2.png";
import brand3 from "@/assets/imgs/brand3.png";
import brand4 from "@/assets/imgs/brand4.png";
import brand5 from "@/assets/imgs/brand5.png";

import { useNavigate } from "react-router-dom";

interface Props {}

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
];

const swiperList = [
  {
    id: 1,
    img: cloth1,
    title: "Basic High Dpstr",
    oldCost: "69.90",
    cost: "49.00",
    isLoved: false,
  },
  {
    id: 2,
    img: cloth2,
    title: "Long Faux Shearling",
    // oldCost: "45.90",
    cost: "25.90",
    isLoved: true,
  },
  {
    id: 3,
    img: cloth3,
    title: "Blazer Wool",
    oldCost: "189.90",
    cost: "129.00",
    isLoved: false,
  },
  {
    id: 4,
    img: cloth4,
    title: "Corduroy Overshirt",
    // oldCost: "69.90",
    cost: "49.00",
    isLoved: false,
  },
  {
    id: 5,
    img: cloth5,
    title: "Stretch Blazer",
    oldCost: "169.90",
    cost: "29.00",
    isLoved: false,
  },
  {
    id: 6,
    img: cloth6,
    title: "Elbow Patch Blazer",
    oldCost: "41.90",
    cost: "32.99",
    isLoved: false,
  },
];

const Search: React.FC<Props> = () => {
  const navigate = useNavigate();
  const toSearch = () => {
    navigate("/searching");
  };

  return (
    <div>
      <Header name="Search">
        <SearchOutline
          className="block"
          fontSize={24}
          onClick={toSearch}></SearchOutline>
      </Header>
      <Title
        value="Featured brands"
        extra={
          <div className="text-14 fw-500 lh-20 color-primary">view more</div>
        }></Title>

      <CategorySwiper type={2} list={list} />

      <Title value="Trending product"></Title>

      <ClothSwiper list={swiperList} />

      <BtnCard />
    </div>
  );
};

export default Search;
