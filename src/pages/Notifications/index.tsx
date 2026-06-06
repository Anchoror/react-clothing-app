import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import notify from "@/assets/svgs/notify.svg";
import { List } from "antd-mobile";
import { useAppStore } from "@/stores";

interface NoticeItem {
  id: string;
  title: string;
  content: string;
}

const data = [
  {
    id: "1",
    title: "Order Update",
    content: "Your order #1234 has been shipped and is on its way!",
  },
  {
    id: "2",
    title: "New Message",
    content: "You have received a new message from support.",
  },
  {
    id: "3",
    title: "Promotion Alert",
    content: "Get 20% off on your next purchase with code SAVE20.",
  },
];

const Notifications: React.FC = () => {
  const { setPageTitle } = useAppStore();
  const [notices, setNotices] = useState<NoticeItem[]>();

  useEffect(() => {
    setPageTitle("Notifications");

    // Simulate fetching notices from an API
    setTimeout(() => {
      setNotices(data);
    });
  }, [setPageTitle]);

  return (
    <div className="">
      {notices?.length ? (
        <List>
          {notices.map((notice) => (
            <List.Item
              key={notice.id}
              description={notice.content}
              extra={<span className="text-12 text-gray-500"></span>}>
              {notice.title}
            </List.Item>
          ))}
        </List>
      ) : (
        <div className="text-center px-24 py-16">
          <ReactSVG src={notify} className="w-134 mt-112 mx-auto"></ReactSVG>

          <div className="text-h2">Nothing to see yet</div>

          <div className="text-content2 text-center mt-8 flex-1">
            You’ll get updates on your account and shopping activity here
          </div>
        </div>
      )}

      {/* <div className="absolute bottom-16 left-24 right-24">
        <Button color="primary" fill="solid" className="h-56!" block>
          <span className="text-16 fw-700 lh-22">Start Shopping</span>
        </Button>
      </div> */}
    </div>
  );
};

export default Notifications;
