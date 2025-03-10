import { useState, useRef, useEffect } from "react";
const CardStock = ({ data, status, setStatus }) => {
  const cardHeight = 185;
  const [deg, setDeg] = useState(0);
  const [disableDefaultTouchAction, setDisableDefaultTouchAction] =
    useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDeg(3);
    }, 300);
  }, [data]);

  const containerStyle: React.CSSProperties = {
    transformOrigin: "center 600px",
    position: "absolute",
    width: "100%",
  };

  const cardStyle: React.CSSProperties = {
    width: "100%",
    height: cardHeight + "px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    borderRadius: "8px",
    background: "#fff",
    transition: "all 0.3s ease-in-out",
  };

  const elem = useRef(null);
  // const elemPos = useRef({ x: 0, y: 0 });
  const elemRotate = useRef(0);
  const touchStart = useRef({ x: 0, y: 0 });
  const touchMove = useRef({ x: 0, y: 0 });
  const touchEnd = useRef({ x: 0, y: 0 });

  const onTouchStart = (e) => {
    elem.current = e.currentTarget;
    console.log("start", elem);
    elem.current.style.transition = "";
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    const transformCss = elem.current.style.transform;
    elemRotate.current = Number(transformCss.slice(7, -4)) || 0;

    if (disableDefaultTouchAction) {
      setDisableDefaultTouchAction(false);
    }
  };
  const onTouchMove = (e) => {
    touchMove.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    const diffX = touchMove.current.x - touchStart.current.x;
    const diffY = touchMove.current.y - touchStart.current.y;
    // elem.current.style.transform = `translateX(${diffX}px) translateY(${diffY}px)`;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      elem.current.style.transform = `rotate(${
        diffX / 10 + elemRotate.current
      }deg)`;
      setDisableDefaultTouchAction(true);
    } else {
      if (disableDefaultTouchAction) {
        setDisableDefaultTouchAction(false);
      }
    }
  };
  const onTouchEnd = (e) => {
    touchEnd.current = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
    const diffX = touchEnd.current.x - touchStart.current.x;
    elem.current.style.transform = `rotate(0deg)`;
    elem.current.style.transition = "all 0.5s ease-in-out";
    const cardWidth = elem.current.getBoundingClientRect().width;
    if (Math.abs(diffX) > Math.min(cardWidth / 2, 130)) {
      elem.current.style.zIndex = elem.current.style.zIndex - data.length;

      const newIndex = (status.index + 1) % data.length;
      setStatus({
        index: newIndex,
        id: data[newIndex].id,
      });
    }
  };

  const imgs = data.map((item, index) => {
    const baseRotate = (index % 3) * deg * (-1) ** index;
    const zIndex = data.length - index + 100000;
    return (
      <div
        key={index}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          ...containerStyle,
          zIndex,
          touchAction: disableDefaultTouchAction ? "none" : "auto",
        }}>
        <div
          style={{
            ...cardStyle,
            transform: `rotate(${baseRotate}deg)`,
          }}>
          <img
            className="h-full w-full object-contain object-center"
            src={item.img}
            alt=""
          />
        </div>
      </div>
    );
  });

  return (
    <div className="relative" style={{ height: cardHeight + "px" }}>
      {imgs}
    </div>
  );
};

export default CardStock;
