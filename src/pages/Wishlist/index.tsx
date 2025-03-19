import ClothList from "@/components/ClothList";
import cloth1 from "@/assets/imgs/cloth1.png";
import cloth2 from "@/assets/imgs/cloth2.png";
import cloth3 from "@/assets/imgs/cloth3.png";
import cloth4 from "@/assets/imgs/cloth4.png";
import cloth5 from "@/assets/imgs/cloth5.png";
import cloth6 from "@/assets/imgs/cloth6.png";
import { useAppStore } from "@/stores";
import { useEffect } from "react";

interface Props {}

const list = new Array(10).fill(0).map((_, index) => ({
  id: index,
  img: [cloth1, cloth2, cloth3, cloth4, cloth5, cloth6][index % 6],
  title: "Basic High Dpstr",
  oldCost: "69.90",
  cost: "49.00",
  isLoved: false,
}));

const Wishlist: React.FC<Props> = () => {
  const { setPageTitle } = useAppStore();
  useEffect(() => {
    setPageTitle("Wishlist");
  }, [setPageTitle]);
  return (
    <div>
      <ClothList list={list}></ClothList>
    </div>
  );
};

export default Wishlist;
