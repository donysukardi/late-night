import { cn } from '@/utils';
import {
  Checkbox as BaseCheckbox,
  CheckboxProps as BaseCheckboxProps,
} from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

type CheckboxProps = PropsWithChildren<BaseCheckboxProps> & {
  error?: boolean;
};

type CompoundedComponent = React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
> & {
  Group: typeof BaseCheckbox.Group;
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
}) as CompoundedComponent;

Checkbox.Group = BaseCheckbox['Group'];

export { Checkbox };
export type { CheckboxProps };
