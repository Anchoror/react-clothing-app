import React from "react";
import Header from "@/layouts/Header";
import profile from "@/assets/imgs/profile.png";
import { Image, List, Badge } from "antd-mobile";
import { ReactSVG } from "react-svg";
import orders from "@/assets/svgs/orders.svg";
import promo from "@/assets/svgs/promo.svg";
import follow from "@/assets/svgs/follow.svg";
import {
  UserOutline,
  BankcardOutline,
  EnvironmentOutline,
  BellOutline,
  RightOutline,
  MessageOutline,
  FileOutline,
  LockOutline,
  QuestionCircleOutline,
  MailOutline,
} from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores";
import Title from "@/layouts/Title";

interface Props {}

const general = [
  {
    id: 1,
    title: "My account",
    prefix: <UserOutline />,
    to: "/account",
  },
  {
    id: 2,
    title: "Payment methods",
    prefix: <BankcardOutline />,
    to: "",
  },
  {
    id: 3,
    title: "My Address",
    prefix: <EnvironmentOutline />,
    to: "",
  },
  {
    id: 4,
    title: "Notifications",
    prefix: <BellOutline />,
    to: "",
  },
];

const other = [
  {
    id: 1,
    title: "Contact preferences",
    prefix: <MessageOutline />,
    to: "",
  },
  {
    id: 2,
    title: "Terms & Conditions",
    prefix: <FileOutline />,
    to: "",
  },
  {
    id: 3,
    title: "Privacy policy",
    prefix: <LockOutline />,
    to: "",
  },
  {
    id: 4,
    title: "Review app",
    prefix: <QuestionCircleOutline />,
    to: "",
  },
];

const User: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  const { notificationsCount, emailsCount } = useAppStore();

  return (
    <div className="pb-40">
      <Header name="Profile">
        <Badge
          content={
            emailsCount ? (
              <div className="size-8 rounded-50% bg-#EB6383 b-solid b-1 b-#fff"></div>
            ) : (
              ""
            )
          }
          style={{ "--right": "3px", "--top": "5px" }}
          color="transparent">
          <MailOutline className="block" fontSize={24}></MailOutline>
        </Badge>
        <Badge
          content={
            notificationsCount ? (
              <div className="size-8 rounded-50% bg-#EB6383 b-solid b-1 b-#fff"></div>
            ) : (
              ""
            )
          }
          style={{ "--right": "5px", "--top": "5px" }}
          color="transparent">
          <BellOutline
            className="block"
            fontSize={24}
            onClick={() => navigate("/notifications")}></BellOutline>
        </Badge>
      </Header>

      <div className="flex gap-17 px-24 mt-32 items-center">
        <Image
          src={profile}
          width={64}
          height={64}
          className="rounded-32"
          fit="cover"></Image>
        <div>
          <div className="text-18 fw-700 lh-26">Marion Angela</div>
          <div className="text-14 fw-400 lh-20 mt-4">
            marion.angela@mail.com
          </div>
        </div>
      </div>

      <div className="my-32 flex items-center bg-#F8FAFC py-16 mx-24 rounded-12">
        <div
          className="flex-1 text-center"
          onClick={() => navigate("/myOrder")}>
          <ReactSVG className="size-24 mx-auto mb-8" src={orders}></ReactSVG>
          <div className="text-label1">My Orders</div>
        </div>
        <div className="w-1 bg-#E2E8F0 h-22"></div>
        <div className="flex-1 text-center">
          <ReactSVG className="size-24 mx-auto mb-8" src={promo}></ReactSVG>
          <div className="text-label1">Promo code</div>
        </div>
        <div className="w-1 bg-#E2E8F0 h-22"></div>

        <div
          className="flex-1 text-center"
          onClick={() => navigate("/following")}>
          <ReactSVG className="size-24 mx-auto mb-8" src={follow}></ReactSVG>
          <div className="text-label1">Following</div>
        </div>
      </div>
      <Title value="General Setting"></Title>
      <List
        className="mx-24 mb-24"
        style={{
          "--border-bottom": "none",
          "--border-inner": "none",
          "--border-top": "none",
        }}>
        {general.map((item) => {
          return (
            <List.Item
              key={item.id}
              arrowIcon={<RightOutline fontSize={12} color="#64748B" />}
              prefix={<div className="text-20 flex-center">{item.prefix}</div>}
              onClick={() => {
                if (item.to) navigate(item.to);
              }}>
              <span className="text-14 fw-500 lh-20">{item.title}</span>
            </List.Item>
          );
        })}
      </List>
      <Title value="Other"></Title>
      <List
        className="mx-24"
        style={{
          "--border-bottom": "none",
          "--border-inner": "none",
          "--border-top": "none",
        }}>
        {other.map((item) => {
          return (
            <List.Item
              key={item.id}
              arrowIcon={<RightOutline fontSize={12} color="#64748B" />}
              prefix={<div className="text-20 flex-center">{item.prefix}</div>}
              onClick={() => {
                console.log(item.to);
              }}>
              <span className="text-14 fw-500 lh-20">{item.title}</span>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default User;
