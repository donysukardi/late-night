import { Button as BaseButton, ButtonProps as BaseButtonProps } from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<BaseButtonProps>;

const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  props,
  ref,
) {
  return <BaseButton ref={ref} {...props} />;
});

export { Button };
export type { ButtonProps };
