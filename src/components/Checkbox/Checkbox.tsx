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
  const { error, className, ...rest } = props;

  return (
    <BaseCheckbox
      className={cn(
        error && '[&_.ant-checkbox-inner]:border-[#DF4040]',
        className,
      )}
      ref={ref}
      {...rest}
    />
  );
}) as typeof BaseCheckbox;

Checkbox.Group = BaseCheckbox['Group'];

export { Checkbox };
export type { CheckboxProps };
