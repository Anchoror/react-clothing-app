import React, { useEffect } from "react";
import Header from "@/layouts/Header";
import EmptyPage from "@/layouts/EmptyPage";
import empty from "@/assets/svgs/empty.svg";
import { HeartOutline, DeleteOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "antd-mobile";
import { Checkbox, SwipeAction } from "antd-mobile";
import ClothItem from "@/components/ClothItem";
import { useBagStore } from "@/stores";

const Bag: React.FC = () => {
  const [emptyShow, setEmptyShow] = React.useState(true);
  const [checksValue, setChecksValue] = React.useState<string[][]>([]);
  const navigate = useNavigate();

  const clothes = useBagStore((state) => state.clothes);
  const changeCount = useBagStore((state) => state.changeCount);
  const delCloth = useBagStore((state) => state.delCloth);
  const totalCost = useBagStore((state) => {
    let totalCost = 0;
    const clothes = state.clothes;
    clothes.forEach((brand) => {
      brand.goods.forEach((cloth) => {
        return (totalCost += cloth.count * parseFloat(cloth.cost) * 100);
      });
    });
    return (totalCost / 100).toFixed(2).toString();
  });

  // 删除单件商品
  const onDelCloth = (bid: number, cid: number) => {
    delCloth(bid, cid);

    setChecksValue(
      checksValue.map((item, index) =>
        index === clothes.findIndex((brand) => brand.bid === bid)
          ? item.filter((value) => value !== cid.toString())
          : item,
      ),
    );
  };

  useEffect(() => {
    setChecksValue(clothes.map(() => []));
  }, []);

  useEffect(() => {
    setEmptyShow(clothes.length === 0);
  }, [clothes]);
  const toWishlist = () => {
    navigate("/wishlist");
  };

  const checksList = clothes.map((brand, index) => {
    return (
      <div key={brand.bid} className="my-36">
        <Checkbox
          block
          className="mb-14 px-24 text-16 fw-700 lh-22"
          style={{ "--icon-size": "18px" }}
          checked={
            checksValue[index] &&
            checksValue[index].length === brand.goods.length &&
            checksValue[index].every((value) =>
              brand.goods.some((cloth) => cloth.cid.toString() === value),
            )
          }
          onChange={(checked) => {
            if (checked) {
              setChecksValue(
                checksValue.map((item, i) =>
                  i === index
                    ? brand.goods.map((cloth) => cloth.cid.toString())
                    : item,
                ),
              );
            } else {
              setChecksValue(
                checksValue.map((item, i) => (i === index ? [] : item)),
              );
            }
          }}>
          {brand.brandName}
        </Checkbox>
        <Checkbox.Group
          value={checksValue[index]}
          onChange={(v) => {
            const newChecks = [...checksValue];
            newChecks[index] = v as string[];
            setChecksValue(newChecks);
          }}>
          {brand.goods.map((cloth) => {
            return (
              <SwipeAction
                key={cloth.cid}
                rightActions={[
                  {
                    key: "delete",
                    text: <DeleteOutline fontSize={20} color={"#eb6383"} />,
                    color: "#FEF6F8FF",
                    onClick: () => {
                      onDelCloth(brand.bid, cloth.cid);
                    },
                  },
                ]}
                className="mb-20 anchor-swiperaction">
                <Checkbox
                  block
                  value={cloth.cid.toString()}
                  className="anchor-checkbox px-24"
                  style={{ "--icon-size": "18px" }}>
                  <ClothItem
                    item={cloth}
                    stepper
                    onChange={(value: number) =>
                      changeCount(brand.bid, cloth.cid, value)
                    }></ClothItem>
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
          <div>{checksList}</div>
          <div className="px-24 bottom-[--footer-h] left-0 right-0 bg-#fff py-16 sticky">
            <div className="mb-24 flex justify-between items-center">
              <Checkbox
                block
                className="text-16 fw-700 lh-22"
                checked={clothes.every(
                  (brand, index) =>
                    checksValue[index] &&
                    checksValue[index].length === brand.goods.length &&
                    checksValue[index].every((value) =>
                      brand.goods.some(
                        (cloth) => cloth.cid.toString() === value,
                      ),
                    ),
                )}
                onChange={(checked) => {
                  if (checked) {
                    setChecksValue(
                      clothes.map((brand) =>
                        brand.goods.map((cloth) => cloth.cid.toString()),
                      ),
                    );
                  } else {
                    setChecksValue(clothes.map(() => []));
                  }
                }}>
                Choose all
              </Checkbox>
              <div className="text-18 fw-700 lh-26">${totalCost}</div>
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
