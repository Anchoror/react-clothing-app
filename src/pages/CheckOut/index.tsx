import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Title from "@/layouts/Title";
import { RightOutline } from "antd-mobile-icons";
import ClothItem from "@/components/ClothItem";
import { Button, Divider } from "antd-mobile";
import { ReactSVG } from "react-svg";
import checked from "@/assets/svgs/checked.svg";
import cloth2 from "@/assets/imgs/cloth2.png";

interface Props {}

const data = {
  id: 1,
  img: cloth2,
  title: "Elbow Patch Blazer",
  size: "M",
  color: "pink",
  cost: "149.00",
  count: 1,
  brand: "Nike",
};

const CheckOut: React.FC<Props> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="pb-10">
      <Title
        value="Shipping address"
        extra={
          <div className="color-primary text-14 fw-700 lh-20">Change</div>
        }></Title>

      <div className="flex items-center p-12 bg-#F8FAFC rounded-12 mx-24">
        <div className="flex-1">
          <div className="text-14 fw-700 lh-20 mb-4">Marion</div>
          <div className="color-#64748B text-12 fw-400 lh-18">
            304 Danforth Ave, Jersey City, NJ 07305, United States
          </div>
        </div>
        <RightOutline fontSize={10} color="#1A202C" />
      </div>

      <Title
        value={
          <>
            <div className="text-16 fw-700 lh-22 flex items-center gap-4">
              <ReactSVG
                src={checked}
                className="anchor-svg inline-block"></ReactSVG>
              <span>ZARA</span>
            </div>
          </>
        }></Title>

      <div className="mx-24">
        <ClothItem item={data}></ClothItem>
      </div>

      <Title value="Delivery method"></Title>

      <div className="flex mx-24">
        <div className="flex-1">
          <div className="text-14 fw-700 lh-20 color-#0F172A mb-4">
            Express shipping
          </div>
          <div className="text-12 fw-400 lh-16 color-#64748B">
            Estimated 4-5 days
          </div>
        </div>
        <div className="flex items-center gap-12 py-8">
          <div className="text-14 fw-700">$15.00</div>
          <RightOutline fontSize={12} color="#1A202C" />
        </div>
      </div>

      <Divider
        style={{
          borderColor: "#F1F5F9",
        }}></Divider>

      <div className="p-12 rounded-12 mx-24 bg-#F8FAFC">
        <div className="flex justify-between text-12 lh-16">
          <div className="fw-400 color-#64748B">Total item price</div>
          <div className="fw-500">$51.08</div>
        </div>
        <div className="flex justify-between text-12 lh-16">
          <div className="fw-400 color-#64748B">Shipping fee</div>
          <div className="fw-500">$15.00</div>
        </div>
        <div className="flex justify-between text-12 lh-16 mt-18">
          <div className="fw-400 color-#64748B">Total price</div>
          <div className="fw-500">$66.08</div>
        </div>
        <Divider
          style={{
            borderColor: "#F1F5F9",
          }}></Divider>
        <div className="flex justify-between text-14 lh-20">
          <div className="fw-400 color-#64748B">Total</div>
          <div className="fw-500">$66.08</div>
        </div>
      </div>

      <div className="m-24">
        <Button
          className="h-56! rounded-12! text-16! fw-700! lh-22!"
          fill="solid"
          color="primary"
          block
          onClick={() => {
            navigate("/payment");
          }}>
          Continue Payment
        </Button>
      </div>
    </div>
  );
};

export default CheckOut;
