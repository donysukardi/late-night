import {
  TimePicker as BaseTimePicker,
  TimePickerProps as BaseTimePickerProps,
  TimeRangePickerProps,
} from 'antd';
import { Clock as ClockIcon } from 'iconsax-react';

type TimePickerProps = BaseTimePickerProps & {
  RangePicker?: (typeof BaseTimePicker)['RangePicker'];
};

const TimePicker = function TimePicker(props: TimePickerProps) {
  const {
    suffixIcon = <ClockIcon size="1.5em" />,
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
    suffixIcon = <ClockIcon size="1.5em" />,
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
