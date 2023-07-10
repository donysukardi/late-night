import {
  Input as BaseInput,
  InputProps as BaseInputProps,
  InputRef,
} from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

type InputProps = PropsWithChildren<BaseInputProps>;

const Input = forwardRef<InputRef, InputProps>(function Input(props, ref) {
  return <BaseInput ref={ref} {...props} />;
}) as typeof BaseInput;

Input.Group = BaseInput['Group'];
Input.Search = BaseInput['Search'];
Input.TextArea = BaseInput['TextArea'];
Input.Password = BaseInput['Password'];

export { Input };
export type { InputProps };
