import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Button } from "antd-mobile";
import { useAppStore } from "@/stores";
import brand1 from "@/assets/imgs/brand1.png";
import { StarFill, MailOutline } from "antd-mobile-icons";
import CardListWrap from "@/components/CardListWrap";
import cloth1 from "@/assets/imgs/cloth1.png";
import cloth2 from "@/assets/imgs/cloth2.png";
import cloth3 from "@/assets/imgs/cloth3.png";
import cloth4 from "@/assets/imgs/cloth4.png";
import cloth5 from "@/assets/imgs/cloth5.png";

interface Props {}

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

const Shop: React.FC<Props> = () => {
  const { id } = useParams();
  const { setPageTitle } = useAppStore();
  useEffect(() => {
    setPageTitle("Shop");
  }, [setPageTitle]);
  console.log(id);
  return (
    <div className="py-24">
      <div className="flex items-center gap-12 mb-22 px-24">
        <Image
          src={brand1}
          width={64}
          height={64}
          fit="contain"
          className="rounded-32 bg-#F8FAFC p-12"></Image>
        <div>
          <div className="text-18 fw-700 lh-26 mb-6">ZARA</div>
          <div className="text-14 fw-400 lh-20 color-#64748B">
            @zara.official
          </div>
        </div>
      </div>

      <div className="flex text-center py-6 px-24">
        <div className="flex-1">
          <div className="text-16 fw-700 lh-22 mb-8">
            <StarFill fontSize={14} color="#FFC947" className="mr-6" />
            <span>4.9</span>
          </div>
          <div className="text-12 color-#64748B fw-400 lh-16">534K reviews</div>
        </div>
        <div className="flex-1">
          <div className="text-16 fw-700 lh-22 mb-8">
            <span>1M</span>
          </div>
          <div className="text-12 color-#64748B fw-400 lh-16">Followers</div>
        </div>
        <div className="flex-1">
          <div className="text-16 fw-700 lh-22 mb-8">
            <span>20</span>
          </div>
          <div className="text-12 color-#64748B fw-400 lh-16">Following</div>
        </div>
      </div>

      <div className="flex gap-16 mt-16 px-24">
        <Button className="h-48! rounded-12! bg-#F8FAFC! text-14! fw-700!">
          <MailOutline fontSize={24}></MailOutline>
        </Button>
        <Button className="h-48! rounded-12! bg-#F8FAFC! color-primary! text-14! fw-700! flex-1">
          Following
        </Button>
      </div>

      <CardListWrap data={clothList}></CardListWrap>
    </div>
  );
};

export default Shop;
