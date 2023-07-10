import {
  TimePicker as BaseTimePicker,
  TimePickerProps as BaseTimePickerProps,
  TimeRangePickerProps,
} from 'antd';
import { Clock as ClockIcon } from 'iconsax-react';

const customSuffixIcon = <ClockIcon color="#667085" size="1.25em" />;

type TimePickerProps = BaseTimePickerProps;

const TimePicker = function TimePicker(props: TimePickerProps) {
  const {
    suffixIcon = customSuffixIcon,
    allowClear = false,
    format = 'HH:mm',
  } = props;

  return (
    <BaseTimePicker
      allowClear={allowClear}
      format={format}
      suffixIcon={suffixIcon}
      {...props}
    />
  );
};

const TimeRangePicker = function RangePicker(props: TimeRangePickerProps) {
  const {
    suffixIcon = customSuffixIcon,
    allowClear = false,
    format = 'HH:mm',
  } = props;

  return (
    <BaseTimePicker.RangePicker
      allowClear={allowClear}
      format={format}
      suffixIcon={suffixIcon}
      {...props}
    />
  );
};

TimePicker.RangePicker = TimeRangePicker;

export { TimePicker };
export type { TimePickerProps };
