import React, { useState, useEffect } from "react";

interface Props {
  value: string;
}

const CountDown: React.FC<Props> = ({ value }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const [h, m, s] = value.split(":");
    setHours(parseInt(h));
    setMinutes(parseInt(m));
    setSecond(parseInt(s));
  }, [value]);

  const interval = setInterval(() => {
    if (second > 0) {
      setSecond(second - 1);
    } else {
      if (minutes > 0) {
        setMinutes(minutes - 1);
        setSecond(59);
      } else {
        if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSecond(59);
          clearInterval(interval);
        }
      }
    }
  }, 1000);

  return (
    <div className="flex gap-4 text-12 fw-700 lh-24 text-center">
      {/* <div className="w-28 h-24 rounded-6 bg-#EB6383 color-#fff">{hours}</div>
      <div className="text-14">:</div> */}
      <div className="w-28 h-24 rounded-6 bg-#EB6383 color-#fff">{minutes}</div>
      <div className="text-14">:</div>
      <div className="w-28 h-24 rounded-6 bg-#EB6383 color-#fff">{second}</div>
    </div>
  );
};

export default CountDown;
