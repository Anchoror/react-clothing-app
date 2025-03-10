import React from "react";
import { Swiper, Button } from "antd-mobile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBg from "@/components/PageBg";
import { useAppStore } from "@/stores";

interface Props {}

const welcomeTexts = [
  {
    title: "Welcome to Dipstore.",
    content:
      "Get exclusive limited apparel that only you have! Made by famous brands in the world",
  },
  {
    title: "Everything You Love",
    content:
      "Get exclusive limited apparel that only you have! Made by famous brands in the world",
  },
];

const Dashboard: React.FC<Props> = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { appName } = useAppStore();

  const toSign = () => {
    navigate("/sign-in");
  };

  // const toLogin;

  return (
    <div className="size-screen flex-center relative">
      {/* <div className="bg-var(--primary-800) color-corcal size-screen flex-center absolute z-100">
        <h1 className="text-h1">{name}</h1>
      </div> */}
      {/* <PageBg type={1}></PageBg> */}
      <PageBg index={index}></PageBg>
      <div className="absolute z-100 left-18 right-18 bottom-34 bg-#fff rounded-24">
        <Swiper
          indicatorProps={{
            style: {
              "--dot-color": "#CBD5E1",
              "--dot-size": "6px",
              "--active-dot-size": "32px",
              "--dot-border-radius": "50%",
              "--active-dot-border-radius": "50px",
              "--dot-spacing": "4px",
            },
          }}
          onIndexChange={(index) => setIndex(index)}>
          {welcomeTexts.map((item, index) => {
            return (
              <Swiper.Item key={index}>
                <div className="text-h2 mx-23 mt-28 text-center">
                  {item.title}
                </div>
                <div className="text-content1 mt-12 mb-24 mx-23 text-center">
                  {item.content}
                </div>
              </Swiper.Item>
            );
          })}
        </Swiper>

        <div className="text-center mt-40 mb-20 mx-33 flex gap-12">
          <Button
            fill="solid"
            className=" flex-1 color-primary! bg-#F8FAFC! b-transparent! h-56!"
            onClick={toSign}>
            <span className="text-14 fw-700 lh-20">Sign In</span>
          </Button>
          <Button color="primary" fill="solid" className="flex-1 h-56!">
            <span className="text-14 fw-700 lh-20">Get Started</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
