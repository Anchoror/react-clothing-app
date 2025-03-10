import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "virtual:uno.css";
import "@/styles/base.less";
import "@/styles/variables.less";
import "@/styles/app.less";
// import "~/iconfont.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
