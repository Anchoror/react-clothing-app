import React, { useState } from "react";
import { Form, Input, List, Image } from "antd-mobile";
import {
  CameraOutline,
  SearchOutline,
  ClockCircleOutline,
} from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import Title from "@/layouts/Title";
import { ReactSVG } from "react-svg";
import to from "@/assets/svgs/to.svg";
import ClothList from "@/components/ClothList";

import cloth1 from "@/assets/imgs/cloth1.png";
import cloth2 from "@/assets/imgs/cloth2.png";
import cloth3 from "@/assets/imgs/cloth3.png";
import cloth4 from "@/assets/imgs/cloth4.png";
import cloth5 from "@/assets/imgs/cloth5.png";
import cloth6 from "@/assets/imgs/cloth6.png";

interface Props {}

const Searching: React.FC<Props> = ({}) => {
  const [form] = Form.useForm();
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();

  const list = [
    {
      title: "Basic High Dpstr",
      id: 1,
    },
    {
      title: "Smartwatch",
      id: 2,
    },
    {
      title: "Winter 2021",
      id: 3,
    },
    {
      title: "Dior shades",
      id: 4,
    },
    {
      title: "Gucci belt",
      id: 5,
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

  const searchList = [
    {
      title: "Basic High Dpstr",
      id: 1,
      img: cloth3,
      price: "49.90",
    },
    {
      title: "Basic Blzr Dipstore",
      id: 2,
      img: cloth4,
      price: "149.90",
    },
    {
      title: "Basic Cottonology",
      id: 3,
      img: cloth6,
      price: "89.90",
    },
  ];

  return (
    <>
      <Form
        form={form}
        layout="horizontal"
        className="anchor-form mx-24 my-16 min-h-0!"
        requiredMarkStyle="none"
        hasFeedback={false}>
        <Form.Item
          name="keyword"
          label={
            <SearchOutline className="block" fontSize={22} color="#0F172A" />
          }
          extra={
            focus ? (
              <ReactSVG src={to} className="size-20"></ReactSVG>
            ) : (
              <CameraOutline
                fontSize={22}
                color="#0F172A"
                onClick={() => navigate("/camera")}
              />
            )
          }>
          <Input
            className="text-14 fw-400"
            placeholder="Search"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}></Input>
        </Form.Item>
      </Form>
      {focus ? (
        <>
          <List
            style={{
              "--border-inner": "none",
              "--border-bottom": "none",
              "--border-top": "none",
              "--padding-left": "24px",
              "--padding-right": "24px",
            }}>
            {searchList.map((item) => (
              <List.Item
                key={item.id}
                prefix={
                  <Image
                    src={item.img}
                    width={56}
                    height={56}
                    fit="contain"
                    style={{ borderRadius: 8, background: "#F8FAFC" }}
                  />
                }>
                <div>
                  <div className="text-16 fw-700 lh-22">{item.title}</div>
                  <div className="text-14 fw-400 lh-20 mt-4">${item.price}</div>
                </div>
              </List.Item>
            ))}
          </List>
        </>
      ) : (
        <>
          <Title value="Recent Search"></Title>

          <List
            style={{
              "--font-size": "14px",
              "--border-inner": "none",
              "--border-bottom": "none",
              "--border-top": "none",
            }}>
            {list.map((item) => (
              <List.Item
                key={item.id}
                prefix={<ClockCircleOutline color="#94A3B8" fontSize={15} />}
                extra={<ReactSVG src={to} className="size-20"></ReactSVG>}>
                {item.title}
              </List.Item>
            ))}
          </List>

          <Title value="Popular Search"></Title>

          <ClothList list={clothList} staggered={false}></ClothList>
        </>
      )}
    </>
  );
};

export default Searching;
