import {
  TimePicker as BaseTimePicker,
  TimePickerProps as BaseTimePickerProps,
} from 'antd';
import { Clock as ClockIcon } from 'iconsax-react';

type TimePickerProps = BaseTimePickerProps;

const TimePicker = function TimePicker(props: TimePickerProps) {
  const { suffixIcon = <ClockIcon />, allowClear = false } = props;

  return (
    <BaseTimePicker
      allowClear={allowClear}
      suffixIcon={suffixIcon}
      {...props}
    />
  );
};

export { TimePicker };
export type { TimePickerProps };
