import React from "react";
import { Navigate } from "react-router-dom";
import { useAppStore } from "@/stores";

interface Props {
  children: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  const { token } = useAppStore();

  console.log("tokne", token);

  if (!token) {
    return <Navigate to="/welcome" replace />;
  }

  return <>{children}</>;
};

export default Auth;
