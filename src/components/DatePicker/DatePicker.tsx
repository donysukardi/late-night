import {
  DatePicker as BaseDatePicker,
  DatePickerProps as BaseDatePickerProps,
} from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { Calendar1 as CalendarIcon } from 'iconsax-react';

const customSuffixIcon = <CalendarIcon color="#667085" size="1.25em" />;

type DatePickerProps = BaseDatePickerProps;

function DatePicker(props: DatePickerProps) {
  const { suffixIcon = customSuffixIcon, allowClear = false, ...rest } = props;

  return (
    <BaseDatePicker allowClear={allowClear} suffixIcon={suffixIcon} {...rest} />
  );
}

function DateRangePicker(props: RangePickerProps) {
  const { suffixIcon = customSuffixIcon, allowClear = false } = props;

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
