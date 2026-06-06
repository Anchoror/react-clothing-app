import { create } from "zustand";
import cloth2 from "@/assets/imgs/cloth2.png";

export const useBagStore = create((set, get) => {
  return {
    clothes: [
      {
        bid: 1,
        brandName: "Nike",
        goods: [
          {
            cid: 1,
            title: "Elbow Patch Blazer",
            cost: "149.99",
            img: cloth2,
            size: "M",
            count: 1,
          },
          {
            cid: 2,
            title: "Elbow Patch Blazer",
            cost: "149.99",
            img: cloth2,
            size: "M",
            count: 1,
          },
        ],
      },
      {
        bid: 2,
        brandName: "ZRAR",
        goods: [
          {
            cid: 3,
            title: "Elbow Patch Blazer",
            cost: "149.00",
            img: cloth2,
            size: "M",
            count: 1,
          },
        ],
      },
    ],

    changeCount: (bid: number, cid: number, value: number) => {
      set((state) => {
        const newClothes = state.clothes.map((brand) => {
          if (brand.bid === bid) {
            const newBag = brand.goods.map((cloth) => {
              if (cloth.cid === cid) {
                return { ...cloth, count: value };
              }
              return cloth;
            });
            return { ...brand, goods: newBag };
          }
          return brand;
        });
        return { clothes: newClothes };
      });
    },

    delCloth: (bid: number, cid: number) => {
      set((state) => {
        const newClothes = state.clothes
          .map((brand) => {
            if (brand.bid !== bid) return brand;
            const newBag = brand.goods.filter((cloth) => cloth.cid !== cid);
            return { ...brand, goods: newBag };
          })
          .filter((brand) => brand.goods.length > 0);
        return { clothes: newClothes };
      });
    },

    get TotalCount() {
      let total = 0;
      const clothes = get().clothes;
      clothes.forEach((brand) => {
        brand.goods.forEach((cloth) => {
          total += cloth.count;
        });
      });
      return total;
    },
  };
});
