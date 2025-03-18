import { Segmented, Tabs, CapsuleTabs } from "antd-mobile";
import { useState, useRef, useEffect } from "react";
import ColorSwitch from "./ColorSwitch";
import CardStock from "./CardStock";
import { ReactSVG } from "react-svg";
import columns1 from "@/assets/svgs/columns1.svg";
import columns2 from "@/assets/svgs/columns2.svg";
import { useNavigate } from "react-router-dom";

const CardListWrap = ({ data }) => {
  const containerRef = useRef(null);
  const cardHeight = 360;
  const gap = 12;
  const [modeValue, setModeValue] = useState(1);
  // const [listTypeValue, setListTypeValue] = useState(1);
  const navigate = useNavigate();
  const [cardStatus, setCardStatus] = useState(
    data.map((item) => ({
      index: 0,
      id: item.examples[0].id,
    }))
  );

  const [cardSize, setCardSize] = useState({
    width: 0,
    height: 0,
  });
  const [itemSize, setItemSize] = useState({
    width: 0,
    height: cardHeight + gap,
  });
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const cardContainerStyle: React.CSSProperties = {
    position: "relative",
    marginRight: `-${gap}px`,
    padding: `${gap}px`,
    height: containerSize.height + "px",
    // background: modeValue === 1 ? "pink" : "lightblue",
    transition: "all 0.3s ease-in-out",
  };
  const cardStyle: React.CSSProperties = {
    margin: `0 ${gap}px ${gap}px 0`,
    width: cardSize.width + "px",
    transition: "all 0.3s ease-in-out",
    background: "#fff",
    padding: "12px",
    position: "absolute",
    height: cardSize.height + "px",
    willChange: "width",
    // borderRadius: "8px",
  };

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth - 2 * gap;
    const itemWidth = containerWidth / modeValue;
    setCardSize({ width: itemWidth - gap, height: cardHeight });
    setItemSize({ width: itemWidth, height: cardSize.height + gap });
    setContainerSize({
      width: containerWidth,
      height: Math.ceil(data.length / modeValue) * itemSize.height + gap,
    });
  }, [cardSize.height, itemSize.height, modeValue, data]);

  const cards = data.map((item, index) => {
    const xIndex = index % modeValue;
    const yIndex = Math.floor(index / modeValue);
    const baseTranslate = {
      x: xIndex * itemSize.width,
      y: yIndex * itemSize.height,
    };

    const translate = {
      ...baseTranslate,
    };

    const setStatus = (status) => {
      const newStatus = [...cardStatus];
      newStatus[index] = status;
      setCardStatus(newStatus);
      console.log(newStatus);
    };

    return (
      <div
        style={{
          ...cardStyle,
          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        }}
        key={index}
        onClick={() => navigate("/detail")}>
        <CardStock
          data={item.examples}
          status={cardStatus[index]}
          setStatus={setStatus}></CardStock>
        <p className="text-16 mt-16 text-nowrap">{item.title}</p>
        <p className="text-14">
          <span className="color-#666 mr-4">price</span>
          <span className="color-primary">${item.cost}</span>
        </p>

        <p className="text-14">
          <span className="color-#666 mr-4">category</span>
          <span>{item.category}</span>
        </p>
        <p className="text-14">
          <span className="color-#666 mr-4">brand</span>
          <span>{item.brand}</span>
        </p>
        {/* <p className="text-14">
          <span className="color-#666 mr-4">material</span>
          <span>{item.material}</span>
        </p> */}
        <p className="text-14">
          <span className="color-#666 mr-4">stock</span>
          <span>{item.stock}</span>
        </p>
        <div className="text-14">
          <span className="color-#666 mr-4">color</span>
          <ColorSwitch
            data={item.examples}
            val={cardStatus[index].id}></ColorSwitch>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-22">
      <div className="flex justify-between items-center p-12 bg-#fff">
        {/* <div className="text-20">title</div> */}
        <Tabs
          className="min-w-300"
          style={{
            // "--adm-color-border": "transparent",
            "--active-title-color": "#0F172A",
            "--active-line-color": "#0F172A",
          }}>
          <Tabs.Tab title="Woman" key="1" className="color-#94A3B8" />
          <Tabs.Tab title="Man" key="2" className="color-#94A3B8" />
        </Tabs>
        <Segmented
          options={[
            {
              value: 1,
              icon: (
                <ReactSVG
                  src={columns1}
                  className="size-16 anchor-svg"></ReactSVG>
              ),
            },
            {
              value: 2,
              icon: (
                <ReactSVG
                  src={columns2}
                  className="size-16 anchor-svg"></ReactSVG>
              ),
            },
          ]}
          className="anchor-seg mr-12"
          style={{
            "--segmented-background": "transparent",
            "--segmented-item-color": "#94A3B8",
            "--segmented-item-selected-background": "#ECFDF5",
            "--segmented-item-selected-color": "var(--primary-color)",
          }}
          value={modeValue}
          onChange={(val) => setModeValue(val as number)}></Segmented>
      </div>

      <CapsuleTabs className="anchor-capsuletabs">
        <CapsuleTabs.Tab title="⭐️ Best sellers" key="1" />
        <CapsuleTabs.Tab title="👚 Tops" key="2" />
        <CapsuleTabs.Tab title="🧥 Blazers" key="3" />
        <CapsuleTabs.Tab title="👗 Dressess" key="4" />
      </CapsuleTabs>
      <div style={cardContainerStyle} ref={containerRef}>
        {cards}
      </div>
    </div>
  );
};

export default CardListWrap;
