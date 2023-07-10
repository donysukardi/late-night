import { Radio as BaseRadio, RadioProps as BaseRadioProps } from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

type RadioProps = PropsWithChildren<BaseRadioProps>;

interface RadioType
  extends React.ForwardRefExoticComponent<
    RadioProps & React.RefAttributes<HTMLElement>
  > {
  Button: (typeof BaseRadio)['Button'];
  Group: (typeof BaseRadio)['Group'];
}

const Radio = forwardRef<HTMLElement, RadioProps>(function Radio(props, ref) {
  return <BaseRadio ref={ref} {...props} />;
}) as RadioType;

Radio.Group = BaseRadio['Group'];
Radio.Button = BaseRadio['Button'];

export { Radio };
export type { RadioProps };
