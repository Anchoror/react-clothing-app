import React, { useState } from "react";
// import { DownOutline } from "antd-mobile-icons";
// import CardStock from "@/components/CardStock";
// import CardListWrap from "@/components/CardListWrap";
// import clothSvg1 from "@/assets/svgs/clothing.svg";
// import clothSvg2 from "@/assets/svgs/clothing2.svg";
// import clothSvg3 from "@/assets/svgs/clothing3.svg";
// import clothSvg4 from "@/assets/svgs/clothing4.svg";
import cloth1 from "@/assets/imgs/cloth1.png";
import cloth2 from "@/assets/imgs/cloth2.png";
import cloth3 from "@/assets/imgs/cloth3.png";
import cloth4 from "@/assets/imgs/cloth4.png";
import cloth5 from "@/assets/imgs/cloth5.png";
import cloth6 from "@/assets/imgs/cloth6.png";
import category1 from "@/assets/imgs/category1.png";
import category2 from "@/assets/imgs/category2.png";
import category3 from "@/assets/imgs/category3.png";
import category4 from "@/assets/imgs/category4.png";

import Banner from "@/components/Banner";
import ClothSwiper from "@/components/ClothSwiper";
import { ReactSVG } from "react-svg";
import fire from "@/assets/svgs/fire.svg";
import down from "@/assets/svgs/down.svg";
import CountDown from "@/components/CountDown";
import Title from "@/layouts/Title";
import Header from "@/layouts/Header";
import CategorySwiper from "@/components/CategorySwiper";
import ClothList from "@/components/ClothList";
import { Picker, Badge } from "antd-mobile";
import { MailOutline, BellOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores";

interface HomeProps {
  // Add your props here
}

const bannerList = [
  {
    id: 1,
    img: "",
    color: "#52423A",
  },
  {
    id: 2,
    img: "",
    color: "#827456",
  },
  {
    id: 3,
    img: "",
    color: "#D5D7D6",
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
    oldCost: "45.90",
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
    oldCost: "69.90",
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

const categoryList = [
  {
    id: 1,
    name: "Clothing",
    img: category1,
  },
  {
    id: 2,
    name: "Shoes",
    img: category2,
  },
  {
    id: 3,
    name: "Accessories",
    img: category3,
  },
  {
    id: 4,
    name: "Bag",
    img: category4,
  },
];

const clothList = new Array(10).fill(0).map((_, index) => ({
  id: index,
  img: [cloth1, cloth2, cloth3, cloth4, cloth5, cloth6][index % 6],
  title: "Basic High Dpstr",
  oldCost: "69.90",
  cost: "49.00",
  isLoved: false,
}));

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const { appName, notificationsCount, emailsCount } = useAppStore();
  const [sort, setSort] = useState("Sort By");
  const [visible, setVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState([]);
  const sortCol = [
    [
      {
        value: "Sort By",
        label: "Default",
      },
      {
        value: "Viewed",
        label: "Viewed",
      },
      {
        value: "Newest",
        label: "Newest",
      },
      {
        value: "Price: Low to High",
        label: "Price: Low to High",
      },
    ],
  ];

  return (
    <>
      {/* <CardStock initialList={cardList} /> */}

      <Header name={appName}>
        <Badge
          content={
            emailsCount ? (
              <div className="size-8 rounded-50% bg-#EB6383 b-solid b-1 b-#fff"></div>
            ) : (
              ""
            )
          }
          style={{ "--right": "3px", "--top": "5px" }}
          color="transparent">
          <MailOutline className="block" fontSize={24}></MailOutline>
        </Badge>
        <Badge
          content={
            notificationsCount ? (
              <div className="size-8 rounded-50% bg-#EB6383 b-solid b-1 b-#fff"></div>
            ) : (
              ""
            )
          }
          style={{ "--right": "5px", "--top": "5px" }}
          color="transparent">
          <BellOutline
            className="block"
            fontSize={24}
            onClick={() => navigate("/notifications")}></BellOutline>
        </Badge>
      </Header>

      <Banner list={bannerList} />

      <Title
        value={
          <>
            Selling fast
            <ReactSVG
              src={fire}
              className="size-18 inline-block vertical-top ml-6"></ReactSVG>
          </>
        }
        extra={<CountDown value="0:20:16"></CountDown>}></Title>

      <ClothSwiper list={swiperList} />

      <Title
        value="Shop by categories"
        extra={
          <div
            className="text-14 fw-500 lh-20 color-primary"
            onClick={() => navigate("/clothing")}>
            view more
          </div>
        }></Title>

      <CategorySwiper list={categoryList} type={1} />

      <Title
        value="Popular products"
        extra={
          <div
            className="color-#475569 flex items-center gap-4"
            onClick={() => setVisible(!visible)}>
            <span className="text-12 lh-16 fw-400">{sort}</span>
            <ReactSVG src={down} className="size-14 relative top--3"></ReactSVG>
          </div>
        }></Title>

      <ClothList list={clothList} staggered></ClothList>

      {/* <CardListWrap data={cardList}></CardListWrap> */}

      <Picker
        columns={sortCol}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        value={pickerValue}
        onConfirm={(v) => {
          setPickerValue(v);
          setSort(v[0] + "");
        }}
      />
    </>
  );
};

export default Home;
