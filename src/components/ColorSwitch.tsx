import { useEffect, useRef } from "react";

const ColorSwitch = ({ data, val }) => {
  const colorStyle = useRef({
    display: "inline-block",
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 4,
    transition: `all 0.3s ease-in-out`,
    border: "1px solid rgba(0,0,0,0.1)",
  });

  const boxShadow = ` rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px`;

  useEffect(() => {}, [data, val]);

  const colors = data.map((item) => {
    return (
      <div
        key={item.id}
        style={{
          ...colorStyle.current,
          backgroundColor: item.color,
          transform: `translateY(${val === item.id ? -4 : 0}px)`,
          boxShadow: val === item.id ? boxShadow : "",
        }}></div>
    );
  });
  return <div className="inline-block text-0 vertical-middle">{colors}</div>;
};

export default ColorSwitch;
