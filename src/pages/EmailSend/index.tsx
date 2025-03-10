import { Button } from "antd-mobile";
import { ReactSVG } from "react-svg";
import Email from "@/assets/svgs/email.svg";
import root from "@/assets/svgs/root.svg";

const EmailSend = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center px-24 pb-16">
      <div className="h-56 flex items-center justify-start w-full">
        <ReactSVG className="size-28" src={root}></ReactSVG>
      </div>
      <ReactSVG src={Email} className="mt-104"></ReactSVG>

      <div className="text-h2 mt-40">Check your email</div>
      <div className="text-content2 text-center mt-8 flex-1">
        Tap the button in the email we’ve sent to marion.angel45@mail.com
      </div>

      <Button color="primary" fill="solid" className=" h-56!" block>
        <span className="text-16 fw-700 lh-22">Open email app</span>
      </Button>
      <Button
        fill="solid"
        className="color-primary! bg-#F8FAFC! b-transparent! h-56! mt-16!"
        block>
        <span className="text-16 fw-700 lh-22">Resend email</span>
      </Button>
    </div>
  );
};

export default EmailSend;
