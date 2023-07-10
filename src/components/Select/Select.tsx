import { Select as BaseSelect, SelectProps as BaseSelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ArrowDown2 as ArrowDownIcon } from 'iconsax-react';

type SelectProps<
  ValueType = unknown,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> = BaseSelectProps<ValueType, OptionType>;

const customSuffixIcon = <ArrowDownIcon color="#667085" size="1.25em" />;

function Select<
  ValueType,
  OptionType extends BaseOptionType | DefaultOptionType,
>(props: SelectProps<ValueType, OptionType>) {
  const {
    popupMatchSelectWidth = false,
    suffixIcon = customSuffixIcon,
    ...rest
  } = props;
  return (
    <BaseSelect<ValueType, OptionType>
      popupMatchSelectWidth={popupMatchSelectWidth}
      suffixIcon={suffixIcon}
      {...rest}
    />
  );
}

Select.Option = BaseSelect['Option'];

export { Select };
export type { SelectProps };
