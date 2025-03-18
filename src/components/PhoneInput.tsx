import { Space, Picker, Input } from "antd-mobile";
import type { PickerValue } from "antd-mobile/es/components/picker";
import { useState, type FC } from "react";
import { ReactSVG } from "react-svg";

import UK from "@/assets/svgs/UK.svg";
import USA from "@/assets/svgs/USA.svg";
import France from "@/assets/svgs/France.svg";
import Korea from "@/assets/svgs/Korea.svg";

interface MobileValue {
  preValue: string | number;
  realValue: string;
}

interface MobileFieldProps {
  value?: MobileValue;
  onChange?: (value: MobileValue) => void;
}

const preMap = [
  {
    icon: UK,
    label: "UK",
    value: "44",
  },
  {
    icon: USA,
    label: "USA",
    value: "1",
  },
  {
    icon: France,
    label: "France",
    value: "33",
  },
  {
    icon: Korea,
    label: "Korea",
    value: "82",
  },
];

const PhoneInput: FC<MobileFieldProps> = ({
  value = { preValue: "44", realValue: "" },
  onChange,
}) => {
  const [visible, setVisible] = useState(false);

  const triggerValue = (changedValue: Partial<MobileValue>) => {
    onChange?.({ ...value, ...changedValue });
  };
  const onRealValueChange = (value: string) => {
    triggerValue({ realValue: value });
  };

  const onPreValueChange = (value: PickerValue[]) => {
    const v = value[0];
    if (v === null) return;
    triggerValue({ preValue: v });
  };

  return (
    <>
      <Space align="center" block className="h-24">
        <ReactSVG
          src={preMap.find((item) => item.value === value.preValue)?.icon}
          className="size-24 flex-center anchor-svg"
          onClick={() => setVisible(true)}></ReactSVG>

        <div className="text-14 lh-24">{value.preValue}</div>
        <Input
          placeholder="请输入手机号"
          value={value.realValue}
          onChange={onRealValueChange}
        />
      </Space>
      <Picker
        columns={[preMap]}
        visible={visible}
        renderLabel={(item: any) => (
          <ReactSVG
            src={item?.icon}
            className="size-24 flex-center mt-8"></ReactSVG>
        )}
        onClose={() => {
          setVisible(false);
        }}
        value={[value.preValue]}
        onConfirm={onPreValueChange}
      />
    </>
  );
};

export default PhoneInput;
