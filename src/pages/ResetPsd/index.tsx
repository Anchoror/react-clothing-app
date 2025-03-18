import React from "react";
import { Button, Form, Tabs, Input } from "antd-mobile";
import { MailOutline, CheckOutline } from "antd-mobile-icons";

import back from "../../assets/svgs/back.svg";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import PhoneInput from "@/components/PhoneInput";
import "./index.less";

interface Props {}

const ResetPsd: React.FC<Props> = () => {
  const [form] = Form.useForm();
  //   const [showPsd, setShowPsd] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [type, setType] = React.useState("email");
  const navigate = useNavigate();

  const checkedEmail = (_rule, value) => {
    const exp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

    setEmailValid(exp.test(value));
    return Promise.reject(new Error(""));
  };

  return (
    <div className="size-screen px-24 bg-#fff">
      <div className="h-56 flex items-center">
        <ReactSVG src={back} className="size-32" />
      </div>
      <div className="text-h3">Password Recovery</div>
      <div className="text-content2 mt-8">
        Enter your email address or phone number to recover your password
      </div>

      <Tabs
        activeLineMode="fixed"
        className="anchor-tabs"
        activeKey={type}
        onChange={(key) => {
          setType(key);
        }}
        style={{
          "--fixed-active-line-width": "50%",
          "--title-font-size": "14px",
          "--content-padding": "0px",
        }}>
        <Tabs.Tab title="Email" key="email" destroyOnClose>
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
                onClick={() => navigate("/email-send")}>
                <span className="text-16 fw-700 lh-22">Send Link</span>
              </Button>
            }>
            <Form.Item
              name="email"
              label={<MailOutline fontSize={22} />}
              rules={[{ required: true, validator: checkedEmail }]}
              extra={
                emailValid && <CheckOutline color="#34D399" fontSize={24} />
              }>
              <Input placeholder="Email" />
            </Form.Item>
          </Form>
        </Tabs.Tab>
        <Tabs.Tab title="Phone Number" key="phone" destroyOnClose>
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
                onClick={() => navigate("/auth-code")}>
                <span className="text-16 fw-700 lh-22">
                  {type === "email" ? "Send Link" : "Send Code"}
                </span>
              </Button>
            }>
            <Form.Item
              name="mobile"
              rules={[{ required: true }]}
              extra={<CheckOutline color="#34D399" fontSize={24} />}>
              <PhoneInput />
            </Form.Item>
          </Form>
        </Tabs.Tab>
      </Tabs>

      <div className="h-14"></div>
    </div>
  );
};

export default ResetPsd;
