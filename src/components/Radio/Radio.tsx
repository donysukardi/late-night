import { Radio as BaseRadio, RadioProps as BaseRadioProps } from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

type RadioProps = PropsWithChildren<BaseRadioProps>;

const Radio = forwardRef<HTMLElement, RadioProps>(function Radio(props, ref) {
  return <BaseRadio ref={ref} {...props} />;
}) as typeof BaseRadio;

Radio.Group = BaseRadio['Group'];
Radio.Button = BaseRadio['Button'];

export { Radio };
export type { RadioProps };
