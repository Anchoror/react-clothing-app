import React from "react";
import { Button, Form, Input } from "antd-mobile";
import {
  EyeInvisibleOutline,
  EyeOutline,
  LockOutline,
} from "antd-mobile-icons";

import back from "../../assets/svgs/back.svg";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

interface Props {}

const AuthCode: React.FC<Props> = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [showPsd, setShowPsd] = React.useState(false);
  const [showPsd2, setShowPsd2] = React.useState(false);

  return (
    <div className="size-screen px-24 bg-#fff">
      <div className="h-56 flex items-center">
        <ReactSVG src={back} className="size-32" />
      </div>
      <div className="text-h3">Change Password</div>
      <div className="text-content2 mt-8">Please enter a new password</div>

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
            onClick={() => navigate("/success")}>
            <span className="text-16 fw-700 lh-22">Reset Password</span>
          </Button>
        }>
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
          <Input
            className="psd-hide"
            type={showPsd ? "text" : "password"}
            placeholder="Password (at least 8 characters)"></Input>
        </Form.Item>
        <Form.Item
          name="psd2"
          label={<LockOutline fontSize={22} />}
          extra={
            <div onClick={() => setShowPsd2(!showPsd)}>
              {showPsd2 ? (
                <EyeOutline color="#64748B" fontSize={24}></EyeOutline>
              ) : (
                <EyeInvisibleOutline
                  color="#64748B"
                  fontSize={24}></EyeInvisibleOutline>
              )}
            </div>
          }>
          <Input
            className="psd-hide"
            type={showPsd2 ? "text" : "password"}
            placeholder="Password (at least 8 characters)"></Input>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthCode;
