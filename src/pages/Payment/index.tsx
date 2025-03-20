import React, { useEffect } from "react";
import Title from "@/layouts/Title";
import { Divider, Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores";

interface Props {}

const Payment: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { setPageTitle } = useAppStore();
  useEffect(() => {
    setPageTitle("Payment");
  }, [setPageTitle]);
  return (
    <div className="py-1">
      <Title
        value="Payment method"
        extra={
          <div className="color-primary text-14 fw-700 lh-20">Change</div>
        }></Title>

      <div className="anchor-bank-card">
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="36.08984375"
            height="27.7099609375"
            viewBox="0 0 36.08984375 27.7099609375"
            fill="none">
            <g opacity="0.6">
              <path
                fill="rgba(255, 255, 255, 1)"
                d="M0 22.21L0 5.49996C0 2.4624 2.46243 -3.8147e-05 5.5 -3.8147e-05L30.59 -3.8147e-05C33.6276 -3.8147e-05 36.09 2.4624 36.09 5.49996L36.09 22.21C36.09 25.2475 33.6276 27.71 30.59 27.71L5.5 27.71C2.46243 27.71 0 25.2475 0 22.21ZM1 22.21C1 24.6952 3.01472 26.71 5.5 26.71L30.59 26.71C33.0753 26.71 35.09 24.6952 35.09 22.21L35.09 5.49996C35.09 3.01468 33.0753 0.999962 30.59 0.999962L5.5 0.999962C3.01472 0.999962 1 3.01468 1 5.49996L1 22.21Z"></path>
              <path
                fill="rgba(255, 255, 255, 1)"
                d="M13.6201 19.355L13.6201 8.35502C13.6201 6.05475 15.4849 4.19002 17.7851 4.19002C20.0854 4.19002 21.9501 6.05475 21.9501 8.35502L21.9501 19.355C21.9501 21.6553 20.0854 23.52 17.7851 23.52Q16.0599 23.52 14.84 22.3001Q13.6201 21.0802 13.6201 19.355ZM14.6201 19.355Q14.6201 20.666 15.5471 21.593Q16.4741 22.52 17.7851 22.52C19.5331 22.52 20.9501 21.103 20.9501 19.355L20.9501 8.35502C20.9501 6.60704 19.5331 5.19002 17.7851 5.19002C16.0371 5.19002 14.6201 6.60704 14.6201 8.35502L14.6201 19.355Z"></path>
              <path
                stroke="rgba(255, 255, 255, 1)"
                stroke-width="1"
                d="M0.430176 5.87988L15.0801 5.87988"></path>
              <path
                stroke="rgba(255, 255, 255, 1)"
                stroke-width="1"
                d="M20.8804 5.87988L35.5303 5.87988"></path>
              <path
                stroke="rgba(255, 255, 255, 1)"
                stroke-width="1"
                d="M0.430176 13.75L14.27 13.75"></path>
              <path
                stroke="rgba(255, 255, 255, 1)"
                stroke-width="1"
                d="M21.6704 13.75L35.5103 13.75"></path>
              <path
                stroke="rgba(255, 255, 255, 1)"
                stroke-width="1"
                d="M0.430176 21.6201L15.0801 21.6201"></path>
              <path
                stroke="rgba(255, 255, 255, 1)"
                stroke-width="1"
                d="M20.8804 21.6201L35.5303 21.6201"></path>
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="56"
            height="18"
            viewBox="0 0 56 18"
            fill="none">
            <path
              d="M40.6106 1.84338C40.7921 0.7533 40.7322 0.6066 39.9829 0.31878C38.785 -0.14184 34.4842 -0.0468 33.0462 0.4716C30.4522 1.40652 28.719 4.10904 29.1659 6.52032C29.4134 7.85502 31.1298 9.54738 33.4314 10.7273C35.6401 11.8591 36.0394 13.1238 34.4506 13.9549C33.1878 14.6151 31.2805 14.5717 29.3742 13.8389L27.7984 13.2332L27.5985 14.7217C27.4893 15.5403 27.3358 16.4448 27.2586 16.7314C27.067 17.4409 29.2376 17.9755 32.3064 17.9755C36.1642 17.9755 38.4507 16.787 39.5858 14.1914C40.8688 11.2576 39.8126 9.21276 35.863 6.98706C33.6588 5.74506 33.2769 4.85532 34.5778 3.99312C35.3914 3.4542 37.665 3.4641 39.4027 4.0149C40.1414 4.24926 40.2382 4.07592 40.6106 1.84338ZM47.0338 0.90072C46.6794 1.30266 41.6976 12.9742 39.9174 17.5743C39.8014 17.8738 40.3682 17.9755 42.1501 17.9755L44.5374 17.9755L44.9865 16.6113L45.4356 15.2471L48.3364 15.1551L51.2372 15.0629L51.4349 15.9575C51.8974 18.0587 51.7933 17.9755 53.9661 17.9755L56 17.9755L55.7945 16.9324C55.6814 16.3584 54.8638 12.3502 53.9773 8.02476L52.3662 0.16056L50.6206 0.11718C49.6608 0.09342 48.5682 0.13734 48.1942 0.21546C47.8195 0.29304 47.2976 0.60156 47.0338 0.90072ZM19.8066 17.9755L22.0371 17.9755C24.089 17.9755 24.2799 17.9181 24.4311 17.2534C24.64 16.3357 27.1354 0.68472 27.1354 0.2925C27.1354 0.13158 26.1419 0 24.9278 0L22.7209 0L22.5394 1.04328C22.4403 1.61712 21.8641 5.1921 21.2598 8.98776C20.6556 12.7836 20.0816 16.3584 19.9842 16.9324L19.8066 17.9755ZM13.935 5.9364C12.7422 9.2016 11.6738 11.6935 11.5618 11.4736C11.4486 11.254 10.9614 8.97984 10.4782 6.41988C9.99488 3.85992 9.3996 1.44036 9.156 1.04328C8.7304 0.34956 8.54 0.32166 4.3568 0.33768L0 0.35442L1.904 1.09494C2.95176 1.50228 4.04544 1.93842 4.3344 2.06424C4.6424 2.1978 5.07808 3.11724 5.38272 4.27626C5.67 5.36706 6.5912 8.85942 7.4312 12.0373L8.95832 17.8151L11.3098 17.9075L13.6612 18L17.0537 9.56178C18.9196 4.92084 20.538 0.87084 20.6506 0.56178C20.8342 0.0585 20.6091 0 18.48 0L16.1045 0L13.935 5.9364ZM49.9402 8.58654L50.5383 11.5558L48.6416 11.5558C46.961 11.5558 46.7695 11.4916 46.9678 10.994C47.0904 10.6852 47.633 9.21636 48.174 7.73046C48.715 6.24456 49.1988 5.16132 49.2498 5.32296C49.3007 5.48478 49.6115 6.95376 49.9402 8.58654Z"
              fill-rule="evenodd"
              fill="#FFFFFF"></path>
          </svg>
        </div>
        <div className="mt-32 flex gap-8 text-20 fw-400 lh-32">
          <span>****</span>
          <span>****</span>
          <span>****</span>
          <span>2366</span>
        </div>
        <div className="mt-21 flex justify-between text-12 lh-16 fw-400">
          <div>Card Holder</div>
          <div>Expires</div>
        </div>
        <div className="flex justify-between text-12 lh-16 fw-400">
          <div>Marion Angela</div>
          <div>11/10</div>
        </div>
      </div>

      <div className="p-12 rounded-12 mx-24 bg-#F8FAFC">
        <div className="flex justify-between text-12 lh-16">
          <div className="fw-400 color-#64748B">Total item price</div>
          <div className="fw-500">$51.08</div>
        </div>
        <div className="flex justify-between text-12 lh-16">
          <div className="fw-400 color-#64748B">Shipping fee</div>
          <div className="fw-500">$15.00</div>
        </div>
        <div className="flex justify-between text-12 lh-16 mt-18">
          <div className="fw-400 color-#64748B">Total price</div>
          <div className="fw-500">$66.08</div>
        </div>
        <Divider
          style={{
            borderColor: "#F1F5F9",
          }}></Divider>
        <div className="flex justify-between text-14 lh-20">
          <div className="fw-400 color-#64748B">Total</div>
          <div className="fw-500">$66.08</div>
        </div>
      </div>

      <div className="m-24">
        <Button
          className="h-56! rounded-12! text-16! fw-700! lh-22!"
          fill="solid"
          color="primary"
          block
          onClick={() => {
            navigate("/paySuccess");
          }}>
          Continue Payment
        </Button>
      </div>
    </div>
  );
};

export default Payment;
