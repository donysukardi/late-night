import { cn } from '@/utils';
import {
  Checkbox as BaseCheckbox,
  CheckboxProps as BaseCheckboxProps,
} from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

type CheckboxProps = PropsWithChildren<BaseCheckboxProps> & {
  error?: boolean;
};

interface CheckboxType
  extends React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLInputElement>
  > {
  Group: (typeof BaseCheckbox)['Group'];
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref,
) {
  const className = props.error
    ? cn('[&_.ant-checkbox-inner]:border-[#DF4040]', props.className)
    : props.className;

  return <BaseCheckbox className={className} ref={ref} {...props} />;
}) as CheckboxType;

Checkbox.Group = BaseCheckbox['Group'];

export { Checkbox };
export type { CheckboxProps };
