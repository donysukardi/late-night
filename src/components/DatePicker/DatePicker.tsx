import {
  DatePicker as BaseDatePicker,
  DatePickerProps as BaseDatePickerProps,
} from 'antd';
import { DatePickerType } from 'antd/es/date-picker';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import { PickerComponentClass } from 'antd/es/date-picker/generatePicker/interface';
import { Calendar1 as CalendarIcon } from 'iconsax-react';

type DatePickerProps = BaseDatePickerProps & {
  RangePicker?: PickerComponentClass<
    RangePickerProps<DatePickerType> & {
      dropdownClassName?: string | undefined;
      popupClassName?: string | undefined;
    },
    unknown
  >;
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

DatePicker.RangePicker = BaseDatePicker['RangePicker'];

export { DatePicker };
export type { DatePickerProps };
