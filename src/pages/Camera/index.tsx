import React, { useRef, useEffect } from "react";
// import { Button } from "antd-mobile";
import { CameraOutline, LoopOutline, GiftOutline } from "antd-mobile-icons";

interface Props {}

const Camera: React.FC<Props> = () => {
  const cameraVideoRef = useRef(null);

  // 启动摄像头
  const openMedia = () => {
    // 打开摄像头
    const opt = {
      audio: false,
      video: {
        width: 327,
        height: 526,
      },
    };
    navigator.mediaDevices.getUserMedia(opt).then(successFunc).catch(errorFunc);
  };

  const successFunc = (mediaStream) => {
    const video = cameraVideoRef.current;
    // const video = document.getElementById('cameraVideo') as HTMLVideoElement;
    // 旧的浏览器可能没有srcObject
    if ("srcObject" in video) {
      video.srcObject = mediaStream;
    }
    video.onloadedmetadata = () => {
      video.play();
    };
  };

  const errorFunc = (err) => {
    console.log(`${err.name}: ${err.message}`);
    // always check for errors at the end.
  };

  useEffect(() => {
    openMedia();
  }, []);

  return (
    <div>
      <div className="px-24 py-12 relative text-0">
        <video
          id="cameraVideo"
          ref={cameraVideoRef}
          className="w-full aspect-327/526 rounded-16"
        />

        <div className="absolute bottom-28 text-nowrap x-center bg-#FFFFFF28 rounded-8 text-12 fw-400 lh-32 color-#fff px-16">
          Adjust position of the object
        </div>
      </div>

      <div className="my-40 flex-center gap-40">
        <div className="size-40 rounded-20 bg-#F1F5F9 flex-center">
          <GiftOutline fontSize={20} color="#0F172A" />
        </div>
        <div className="p-9 bg-#f1f5f9 rounded-50%">
          <div className="bg-primary size-54 rounded-50% flex-center">
            <CameraOutline fontSize={22} color="#fff" />
          </div>
        </div>
        <div className="size-40 rounded-20 bg-#F1F5F9 flex-center">
          <LoopOutline fontSize={20} color="#0F172A" />
        </div>
      </div>
    </div>
  );
};

export default Camera;
