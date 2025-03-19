import React, { useEffect } from "react";
import { Image, Button } from "antd-mobile";
import brand1 from "@/assets/imgs/brand1.png";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores";

interface Props {}

const Following: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { setPageTitle } = useAppStore();

  useEffect(() => {
    setPageTitle("Following");
  }, [setPageTitle]);

  return (
    <div className="px-24">
      {new Array(10).fill(1).map((_, index) => {
        return (
          <div
            className="flex gap-12 items-center mb-12 py-8"
            key={index}
            onClick={() => navigate(`/shop/${index}`)}>
            <Image
              src={brand1}
              width={48}
              height={48}
              className="rounded-24 bg-#F8FAFC p-12"
              fit="contain"></Image>
            <div className="flex-1">
              <div className="text-16 fw-700 lh-22">ZARA</div>
              <div className="text-12 fw-400 lh-16 color-#64748B">
                @zara.official
              </div>
            </div>
            <div>
              <Button className="h-40! rounded-12! bg-#F8FAFC! color-primary! text-12!">
                Following
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Following;
