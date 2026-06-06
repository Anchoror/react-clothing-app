import React from "react";
import { useAppStore } from "@/stores";

interface Props {
  children: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  useAppStore();

  // console.log("tokne", token);

  // if (!token) {
  //   return <Navigate to="/welcome" replace />;
  // }

  return <>{children}</>;
};

export default Auth;
