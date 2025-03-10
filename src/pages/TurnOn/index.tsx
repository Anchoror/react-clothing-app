import { ReactSVG } from "react-svg";
import Order from "@/assets/svgs/order.svg";
import { Button } from "antd-mobile";
const TurnOn = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center px-24 py-16">
      <div className="text-h2">Stay in the Loop</div>
      <div className="text-content2 text-center mt-8">
        We'll send notifications to keep you updated on your orders
      </div>

      <ReactSVG src={Order} className="mt-64 flex-1"></ReactSVG>

      <Button color="primary" fill="solid" className=" h-56!" block>
        <span className="text-16 fw-700 lh-22">Turn on Notifications</span>
      </Button>
      <Button
        fill="solid"
        className="color-primary! bg-#F8FAFC! b-transparent! h-56! mt-16!"
        block>
        <span className="text-16 fw-700 lh-22">Not Now</span>
      </Button>
    </div>
  );
};

export default TurnOn;
