import { cn } from '@/utils';
import {
  Checkbox as BaseCheckbox,
  CheckboxProps as BaseCheckboxProps,
} from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

type CheckboxProps = PropsWithChildren<BaseCheckboxProps> & {
  error?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref,
) {
  const className = props.error
    ? cn('[&_.ant-checkbox-inner]:border-[#DF4040]', props.className)
    : props.className;

  return <BaseCheckbox className={className} ref={ref} {...props} />;
}) as typeof BaseCheckbox;

Checkbox.Group = BaseCheckbox['Group'];

export { Checkbox };
export type { CheckboxProps };
