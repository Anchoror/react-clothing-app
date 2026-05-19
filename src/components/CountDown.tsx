import React, { useState, useEffect } from "react";

interface Props {
  value: string | number;
}

const CountDown: React.FC<Props> = ({ value }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(+value);
  }, [value]);

  useEffect(() => {
    const count = setInterval(() => {
      setTotal((prev) => {
        if (prev <= 1) {
          clearInterval(count);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(count);
  });

  const hours = Math.floor(total / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((total % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (total % 60).toString().padStart(2, "0");

  return (
    <div className="flex gap-4 text-12 fw-700 lh-24 text-center">
      <div className="w-28 h-24 rounded-6 bg-#EB6383 color-#fff">{hours}</div>
      <div className="text-14">:</div>
      <div className="w-28 h-24 rounded-6 bg-#EB6383 color-#fff">{minutes}</div>
      <div className="text-14">:</div>
      <div className="w-28 h-24 rounded-6 bg-#EB6383 color-#fff">{seconds}</div>
    </div>
  );
};

export default CountDown;
