import React from "react";
import {
  Button,
  Form,
  Input,
  Divider,
  PasscodeInput,
  // NumberKeyboard,
} from "antd-mobile";
import {
  MailOutline,
  LockOutline,
  EyeOutline,
  EyeInvisibleOutline,
  CheckOutline,
  // CloseOutline,
  UserOutline,
  // DownOutline,
} from "antd-mobile-icons";
import geogle from "../../assets/svgs/geogle.svg";
import apple from "../../assets/svgs/apple.svg";
import back from "../../assets/svgs/back.svg";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import PhoneInput from "@/components/PhoneInput";

interface Props {}

const SignUp: React.FC<Props> = () => {
  const [form] = Form.useForm();
  const [showPsd, setShowPsd] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const navigate = useNavigate();

  const textMap = [
    {
      title: "Let’s Get Started",
      content: "Create an account to continue.",
      btnText: "Continue",
    },
    {
      title: "What’s your phonenumber?",
      content:
        "We’ll send a code to connect your number to your Dipstore account.",
      btnText: "Send Code",
    },
    {
      title: "Enter the code",
      content: "An authentification code has beensent to (+1) 6700 3251 666",
      btnText: "Verifiy",
    },
  ];

  const checkedEmail = (_rule, value) => {
    const exp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

    setEmailValid(exp.test(value));
    return Promise.reject(new Error(""));
  };

  const onNextStep = () => {
    if (step === textMap.length - 1) {
      navigate("/turn-on");
      return;
    }

    setStep(step + 1);
  };

  return (
    <div className="size-screen px-24 bg-#fff">
      <div className="h-56 flex items-center">
        <ReactSVG src={back} className="size-32" />
      </div>
      <div className="text-h3">{textMap[step].title}</div>
      <div className="text-content2 mt-8">{textMap[step].content}</div>

      <Form
        form={form}
        layout="horizontal"
        className="anchor-form"
        requiredMarkStyle="none"
        hasFeedback={false}
        footer={
          <Button
            color="primary"
            block
            fill="solid"
            className="flex-1 h-56!"
            onClick={onNextStep}>
            <span className="text-16 fw-700 lh-22">
              {textMap[step].btnText}
            </span>
          </Button>
        }>
        {step === 0 && (
          <>
            <Form.Item
              name="username"
              label={<UserOutline fontSize={22} />}
              rules={[{ required: true }]}
              extra={<CheckOutline color="#34D399" fontSize={24} />}>
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="email"
              label={<MailOutline fontSize={22} />}
              rules={[{ required: true, validator: checkedEmail }]}
              extra={
                emailValid && <CheckOutline color="#34D399" fontSize={24} />
              }>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="psd"
              label={<LockOutline fontSize={22} />}
              extra={
                <div onClick={() => setShowPsd(!showPsd)}>
                  {showPsd ? (
                    <EyeOutline color="#64748B" fontSize={24}></EyeOutline>
                  ) : (
                    <EyeInvisibleOutline
                      color="#64748B"
                      fontSize={24}></EyeInvisibleOutline>
                  )}
                </div>
              }>
              {/* <PsdInput show={showPsd} /> */}
              <Input
                className="psd-hide"
                type={showPsd ? "text" : "password"}
                placeholder="Password (at least 8 characters)"></Input>
            </Form.Item>

            <div className="text-14 fw-700 lh-20 color-primary mt-16  text-right">
              Forgot Password?
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <Form.Item
              name="mobile"
              rules={[{ required: true }]}
              extra={<CheckOutline color="#34D399" fontSize={24} />}>
              <PhoneInput />
            </Form.Item>
          </>
        )}

        {step === 2 && (
          <>
            <Form.Item
              name="code"
              rules={[{ required: true }]}
              className="no-border">
              <PasscodeInput
                seperated
                length={4}
                plain
                className="code-input"
              />
            </Form.Item>
          </>
        )}
      </Form>
      <Divider className="text-content2 my-24">Or Continue with</Divider>

      <Button block className="h-56!">
        <div className="text-16 fw-700 lh-22">
          <ReactSVG src={geogle} className="absolute size-22 left-24" />
          <span>Continue with Google</span>
        </div>
      </Button>

      <Button fill="none" className="h-56! mt-16!" block>
        <div className="text-16 fw-700 lh-22">
          <ReactSVG src={apple} className="absolute size-22 left-24 top-15" />
          <span>Continue with Apple</span>
        </div>
      </Button>

      <div
        className="text-14 fw-400 lh-20 color-#0F172A text-center mt-102 cursor-pointer"
        onClick={() => navigate("/sign-in")}>
        Already have an account?
      </div>
      <div className="h-14"></div>
    </div>
  );
};

export default SignUp;
