import MainLayout from "@/layouts/MainLayout";
import SubLayout from "@/layouts/SubLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import User from "@/pages/User";
import Bag from "@/pages/Bag";
import Search from "@/pages/Search";
import Welcome from "@/pages/Welcome";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import TurnOn from "@/pages/TurnOn";
import ResetPsd from "@/pages/ResetPsd";
import AuthCode from "@/pages/AuthCode";
import EmailSend from "@/pages/EmailSend";
import ChangePsd from "@/pages/ChangePsd";
import Success from "@/pages/Success";
import Notifications from "@/pages/Notifications";
import Searching from "@/pages/Searching";
import Camera from "@/pages/Camera";
import Clothing from "@/pages/Clothing";
import Detail from "@/pages/Detail";
import MyOrder from "@/pages/MyOrder";
import Following from "@/pages/Following";
import Shop from "@/pages/Shop";
import MyAccount from "@/pages/MyAccount";
import Wishlist from "@/pages/Wishlist";
import CheckOut from "@/pages/CheckOut";
import Payment from "@/pages/Payment";
import PaySuccess from "@/pages/PaySuccess";

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
  meta?: {
    title?: string;
  };
}

export const routes: RouteConfig[] = [
  { path: "/login", element: <Login /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/turn-on", element: <TurnOn /> },
  { path: "/reset-psd", element: <ResetPsd /> },
  { path: "/email-send", element: <EmailSend /> },
  { path: "/auth-code", element: <AuthCode /> },
  { path: "/change-psd", element: <ChangePsd /> },
  { path: "/success", element: <Success /> },
  { path: "/searching", element: <Searching /> },
  { path: "/search", element: <Search /> },
  { path: "myOrder", element: <MyOrder /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "bag", element: <Bag /> },
      { path: "user", element: <User /> },
      { path: "clothing", element: <Clothing /> },
    ],
  },
  {
    path: "/",
    element: <SubLayout />,
    children: [
      { path: "notifications", element: <Notifications /> },
      { path: "camera", element: <Camera /> },
      { path: "detail", element: <Detail /> },
      { path: "following", element: <Following /> },
      { path: "shop/:id", element: <Shop /> },
      { path: "account", element: <MyAccount /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "checkout/:id", element: <CheckOut /> },
      { path: "payment", element: <Payment /> },
      { path: "paySuccess", element: <PaySuccess /> },
    ],
  },
];
