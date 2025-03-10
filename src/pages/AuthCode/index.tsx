import React from "react";
import { Button, Form, PasscodeInput } from "antd-mobile";

import back from "../../assets/svgs/back.svg";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

interface Props {}

const AuthCode: React.FC<Props> = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  return (
    <div className="size-screen px-24 bg-#fff">
      <div className="h-56 flex items-center">
        <ReactSVG src={back} className="size-32" />
      </div>
      <div className="text-h3">Enter the code</div>
      <div className="text-content2 mt-8">
        An authentification code has beensent to (+1) 6700 3251 666
      </div>

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
            onClick={() => navigate("/change-psd")}>
            <span className="text-16 fw-700 lh-22">Verifiy</span>
          </Button>
        }>
        <Form.Item
          name="code"
          rules={[{ required: true }]}
          className="no-border">
          <PasscodeInput seperated length={4} plain className="code-input" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthCode;
