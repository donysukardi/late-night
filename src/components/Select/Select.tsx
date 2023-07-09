import { Select as BaseSelect, SelectProps as BaseSelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';

type SelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType> = BaseSelectProps<ValueType, OptionType> & {
    Option?: typeof BaseSelect['Option'];
};

function Select<ValueType, OptionType extends BaseOptionType | DefaultOptionType>(props: SelectProps<ValueType, OptionType>) {
    return <BaseSelect<ValueType, OptionType> {...props} />;
}

Select.Option = BaseSelect['Option'];

export { Select };
export type { SelectProps };
