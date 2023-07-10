import { DatePicker as BaseDatePicker } from "antd";
import { PickerProps as BasePickerProps } from "antd/es/date-picker/generatePicker";
import { Dayjs } from 'dayjs';
import { Calendar1 as CalendarIcon } from "iconsax-react";

type PickerProps = BasePickerProps<Dayjs> & {
    status?: "" | "error" | "warning";
    hashId?: string;
    popupClassName?: string;
    rootClassName?: string;
};

function DatePicker(props: PickerProps) {
    const { suffixIcon = <CalendarIcon />, allowClear = false } = props;

    return <BaseDatePicker allowClear={allowClear} suffixIcon={suffixIcon} {...props} />;
}

export { DatePicker };
export type { PickerProps };
