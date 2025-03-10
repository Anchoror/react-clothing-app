import React, { useEffect } from "react";
import { ReactSVG } from "react-svg";
import notify from "@/assets/svgs/notify.svg";
import { Button } from "antd-mobile";
import { useAppStore } from "@/stores";

interface Props {}

const Notifications: React.FC<Props> = () => {
  const { setPageTitle } = useAppStore();
  useEffect(() => {
    setPageTitle("Notifications");
  }, [setPageTitle]);
  return (
    <div className="px-24 py-16 text-center">
      <ReactSVG src={notify} className="w-134 mt-112 mx-auto"></ReactSVG>

      <div className="text-h2">Nothing to see yet</div>

      <div className="text-content2 text-center mt-8 flex-1">
        You’ll get updates on your account and shopping activity here
      </div>

      <div className="absolute bottom-16 left-24 right-24">
        <Button color="primary" fill="solid" className="h-56!" block>
          <span className="text-16 fw-700 lh-22">Start Shopping</span>
        </Button>
      </div>
    </div>
  );
};

export default Notifications;
