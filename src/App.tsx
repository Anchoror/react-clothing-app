import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import SubLayout from "@/layouts/SubLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Users from "@/pages/Users";
import Servers from "@/pages/Servers";
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

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/turn-on" element={<TurnOn />} />
      <Route path="/reset-psd" element={<ResetPsd />} />
      <Route path="/email-send" element={<EmailSend />} />
      <Route path="/auth-code" element={<AuthCode />} />
      <Route path="/change-psd" element={<ChangePsd />} />
      <Route path="/success" element={<Success />} />
      <Route path="/searching" element={<Searching />} />
      <Route path="/search" element={<Search />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="servers" element={<Servers />} />
        <Route path="users" element={<Users />} />
        <Route path="clothing" element={<Clothing />} />
      </Route>
      <Route path="/" element={<SubLayout />}>
        <Route path="notifications" element={<Notifications />} />
        <Route path="camera" element={<Camera />}></Route>
        <Route path="detail" element={<Detail />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
