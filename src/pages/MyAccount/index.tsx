import React, { useEffect } from "react";
import { Avatar, Button } from "antd-mobile";
import profile from "@/assets/imgs/profile.png";
import { CameraOutline } from "antd-mobile-icons";
import { useAppStore } from "@/stores";

interface Props {}

const MyAccount: React.FC<Props> = () => {
  const { setPageTitle } = useAppStore();

  useEffect(() => {
    setPageTitle("My Account");
  }, [setPageTitle]);

  return (
    <div className="p-24">
      <div className="relative w-fit mx-auto">
        <Avatar
          src={profile}
          fit="cover"
          style={{
            "--size": "88px",
            "--border-radius": "44px",
          }}></Avatar>

        <div className="bg-primary absolute bottom-0 right-0 b-1 b-solid b-#fff size-24 rounded-12 flex-center">
          <CameraOutline fontSize={14} color="#fff" fontWeight={700} />
        </div>
      </div>

      <div className="mt-200">
        <Button
          block
          className="color-#EB6383! text-16! fw-700! lh-22! rounded-12! bg-#F8FAFC! h-56!">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default MyAccount;
