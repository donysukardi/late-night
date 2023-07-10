import { cn } from '@/utils';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<BaseButtonProps>;

const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  props,
  ref,
) {
  return (
    <BaseButton
      {...props}
      className={cn('!shadow-none', props.className)}
      ref={ref}
    />
  );
}) as typeof BaseButton;

Button.Group = BaseButton.Group;

export { Button };
export type { ButtonProps };
