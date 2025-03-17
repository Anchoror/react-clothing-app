import { TeamFill } from "antd-mobile-icons";
import "./Tabbar.less";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import homeFill from "@/assets/svgs/homeFill.svg";
// import search from "@/assets/svgs/search.svg";
import clothing from "@/assets/svgs/clothing.svg";
import bagFill from "@/assets/svgs/bagFill.svg";
// import userFill from "@/assets/svgs/userFill.svg";

const tabbar = [
  {
    icon: <ReactSVG src={homeFill} className="icon" />,
    text: "Home",
    path: "/",
  },
  {
    icon: <ReactSVG src={clothing} className="icon" />,
    text: "Clothing",
    path: "/clothing",
  },
  {
    icon: <ReactSVG src={bagFill} className="icon" />,
    text: "Bag",
    path: "/bag",
  },
  {
    icon: <TeamFill className="icon" />,
    text: "User",
    path: "/user",
  },
];

const Tabbar = () => {
  const [status, setStatus] = useState("");
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    const currentTab = tabbar.find((tab) => tab.path === currentPath);
    if (currentTab) {
      setStatus(currentTab.text);
    }
  }, [location]);

  return (
    <div className="anchor-tabbar">
      <nav>
        <ul>
          {tabbar.map((item) => {
            return (
              <li key={item.text}>
                <Link
                  to={item.path}
                  className={status === item.text ? "active" : ""}>
                  <div className="svg-container">{item.icon}</div>
                  <div className="text-container">
                    <span>{item.text}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Tabbar;
