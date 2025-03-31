import React from "react";
import { Button, Form, Input, Divider } from "antd-mobile";
import {
  MailOutline,
  LockOutline,
  EyeOutline,
  EyeInvisibleOutline,
  CheckOutline,
  // CloseOutline,
} from "antd-mobile-icons";
import geogle from "../../assets/svgs/geogle.svg";
import apple from "../../assets/svgs/apple.svg";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores";

import "./index.less";

interface Props {}

const SignIn: React.FC<Props> = () => {
  const [form] = Form.useForm();
  const [showPsd, setShowPsd] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const navigate = useNavigate();
  const { setToken } = useAppStore();

  const checkedEmail = (_rule, value) => {
    const exp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

    setEmailValid(exp.test(value));
    return Promise.reject(new Error(""));
  };

  const onSubmit = () => {
    setToken("test_token");
    navigate("/");
  };

  return (
    <div className="size-screen px-24 bg-#fff pt-48">
      <div className="text-h3">Please Sign In</div>
      <div className="text-content2 mt-8">
        Enter your Dipstore account details for a personalised experience.
      </div>

      <Form
        form={form}
        layout="horizontal"
        className="anchor-form"
        requiredMarkStyle="none"
        hasFeedback={false}
        initialValues={{ email: "donquixote1110@outlook.com", psd: "123456" }}
        footer={
          <Button
            color="primary"
            block
            fill="solid"
            className="flex-1 h-56!"
            onClick={onSubmit}>
            <span className="text-16 fw-700 lh-22">Sign In</span>
          </Button>
        }>
        <Form.Item
          name="email"
          label={<MailOutline fontSize={22} />}
          rules={[{ required: true, validator: checkedEmail }]}
          extra={emailValid && <CheckOutline color="#34D399" fontSize={24} />}>
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
      </Form>
      <Divider className="text-content2 my-24">Or Sign In with</Divider>

      <Button block className="h-56!">
        <div className="text-16 fw-700 lh-22">
          <ReactSVG src={geogle} className="absolute size-22 left-24" />
          <span>Sign in with Google</span>
        </div>
      </Button>

      <Button fill="none" className="h-56! mt-16!" block>
        <div className="text-16 fw-700 lh-22">
          <ReactSVG src={apple} className="absolute size-22 left-24 top-15" />
          <span>Sign in with Apple</span>
        </div>
      </Button>

      <div
        className="text-14 fw-400 lh-20 color-#0F172A text-center mt-102 cursor-pointer"
        onClick={() => navigate("/sign-up")}>
        Don't have an account?
      </div>
      <div className="h-14"></div>
    </div>
  );
};

export default SignIn;
