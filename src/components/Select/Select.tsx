import { Select as BaseSelect, SelectProps as BaseSelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ArrowDown2 as ArrowDownIcon } from 'iconsax-react';

type SelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType> = BaseSelectProps<ValueType, OptionType> & {
    Option?: typeof BaseSelect['Option'];
};

function Select<ValueType, OptionType extends BaseOptionType | DefaultOptionType>(props: SelectProps<ValueType, OptionType>) {
    const { popupMatchSelectWidth = false, suffixIcon = <ArrowDownIcon /> } = props;
    return <BaseSelect<ValueType, OptionType> popupMatchSelectWidth={popupMatchSelectWidth} suffixIcon={suffixIcon} {...props} />;
}

Select.Option = BaseSelect['Option'];

export { Select };
export type { SelectProps };
