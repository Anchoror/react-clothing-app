import React, { useEffect } from "react";
import Header from "@/layouts/Header";
import EmptyPage from "@/layouts/EmptyPage";
import empty from "@/assets/svgs/empty.svg";
import { HeartOutline, DeleteOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "antd-mobile";
import cloth2 from "@/assets/imgs/cloth2.png";
import { Checkbox, SwipeAction } from "antd-mobile";
import ClothItem from "@/components/ClothItem";

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

const Bag: React.FC<Props> = () => {
  const [emptyShow, setEmptyShow] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setEmptyShow(false);
  }, []);
  const toWishlist = () => {
    navigate("/wishlist");
  };

  const clothList = Object.entries(Object.groupBy(list, ({ brand }) => brand));

  const checks = clothList.map(([key, value]) => {
    return (
      <div key={key} className="my-36">
        <Checkbox
          block
          className="mb-14 px-24 text-16 fw-700 lh-22"
          style={{ "--icon-size": "18px" }}>
          {key}
        </Checkbox>
        <Checkbox.Group>
          {value.map((item) => {
            return (
              <SwipeAction
                key={item.id}
                rightActions={[
                  {
                    key: "delete",
                    text: <DeleteOutline fontSize={20} color={"#eb6383"} />,
                    color: "#FEF6F8FF",
                  },
                ]}
                className="mb-20 anchor-swiperaction">
                <Checkbox
                  block
                  value={item.id}
                  className="anchor-checkbox px-24"
                  style={{ "--icon-size": "18px" }}>
                  <ClothItem item={item} stepper></ClothItem>
                </Checkbox>
              </SwipeAction>
            );
          })}
        </Checkbox.Group>
      </div>
    );
  });

  return (
    <div>
      <Header name="Bag">
        <HeartOutline className="block" fontSize={24} onClick={toWishlist} />
      </Header>
      {emptyShow ? (
        <EmptyPage
          svg={empty}
          title="Your bag is empty"
          subTitle="Looking for ideas?"
          btnText="Start Shopping"></EmptyPage>
      ) : (
        <div className="relative">
          <div>{checks}</div>
          <div className="px-24 bottom-[--footer-h] left-0 right-0 bg-#fff py-16 sticky">
            <div className="mb-24 flex justify-between items-center">
              <Checkbox block className="text-16 fw-700 lh-22">
                Choose all
              </Checkbox>
              <div className="text-18 fw-700 lh-26">$51.08</div>
            </div>

            <Button
              color="primary"
              block
              fill="solid"
              className="h-56!"
              onClick={() => {
                navigate("/CheckOut/1");
              }}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bag;
