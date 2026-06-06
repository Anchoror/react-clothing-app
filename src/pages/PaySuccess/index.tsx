import React, { useEffect } from "react";
import PaySuccessSvg from "@/assets/svgs/paySuccess.svg";
import EmptyPage from "@/layouts/EmptyPage";
import { useAppStore } from "@/stores";

const PaySuccess: React.FC = () => {
  const { setPageTitle } = useAppStore();
  useEffect(() => {
    console.log("PaySuccess");
    setPageTitle("Payment Successfull");
  }, [setPageTitle]);

  return (
    <EmptyPage
      svg={PaySuccessSvg}
      title="Payment Successfull"
      subTitle="Orders will arive in 4 days!"
      btnText="See order details"></EmptyPage>
  );
};

export default PaySuccess;
