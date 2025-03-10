import React from "react";

interface Props {
  value: string | React.ReactNode;
  extra?: React.ReactNode;
}

const Title: React.FC<Props> = ({ value, extra }) => {
  return (
    <div className="flex justify-between items-center mb-16 mx-24 mt-24">
      <div className="flex items-center">
        <div className="text-16 fw-700 lh-22">{value}</div>
      </div>

      {extra}
    </div>
  );
};

export default Title;
