import {
  DatePicker as BaseDatePicker,
  DatePickerProps as BaseDatePickerProps,
} from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { Calendar1 as CalendarIcon } from 'iconsax-react';

type DatePickerProps = BaseDatePickerProps & {
  RangePicker?: (typeof BaseDatePicker)['RangePicker'];
  hashId?: string;
  popupClassName?: string;
  rootClassName?: string;
  status?: '' | 'error' | 'warning';
};

function DatePicker(props: DatePickerProps) {
  const { suffixIcon = <CalendarIcon />, allowClear = false } = props;

  return (
    <BaseDatePicker
      allowClear={allowClear}
      suffixIcon={suffixIcon}
      {...props}
    />
  );
}

function DateRangePicker(props: RangePickerProps) {
  const { suffixIcon = <CalendarIcon />, allowClear = false } = props;

  return (
    <BaseDatePicker.RangePicker
      allowClear={allowClear}
      suffixIcon={suffixIcon}
      {...props}
    />
  );
}

DatePicker.RangePicker = DateRangePicker;

export { DatePicker };
export type { DatePickerProps };
