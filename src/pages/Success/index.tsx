import { ReactSVG } from "react-svg";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";

import root from "@/assets/svgs/root.svg";
import success from "@/assets/svgs/success.svg";
import star from "@/assets/svgs/star.svg";
import smile from "@/assets/svgs/smile.svg";
import multipleLines from "@/assets/svgs/multipleLines.svg";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center h-full justify-center px-24 pb-16 relative">
      <div className="h-56 flex items-center justify-start w-full">
        <ReactSVG className="size-28" src={root}></ReactSVG>
      </div>
      <ReactSVG src={success} className="mt-93 size-120"></ReactSVG>
      <ReactSVG
        src={star}
        className="color-#E2E8F0 absolute top-119 left-127 size-12"></ReactSVG>
      <ReactSVG
        src={star}
        className="color-#E2E8F0 absolute top-312 left-210 size-6"></ReactSVG>
      <ReactSVG
        src={star}
        className="color-#FFB6B6 absolute top-136 left-234 size-18"></ReactSVG>
      <ReactSVG
        src={smile}
        className="color-#334155 absolute top-270 left-233 size-22"></ReactSVG>
      <ReactSVG
        src={multipleLines}
        className="color-#34D399 absolute top-263 left-93 size-11"></ReactSVG>

      <div className="text-h2 mt-62">Password has been changed</div>
      <div className="text-content2 text-center mt-12 flex-1">
        Don't worry, we'll let you know if there's a problem with your account
      </div>

      <Button
        color="primary"
        fill="solid"
        className=" h-56!"
        block
        onClick={() => {
          navigate("/sign-in");
        }}>
        <span className="text-16 fw-700 lh-22">Back to Login</span>
      </Button>
    </div>
  );
};
export default Success;
