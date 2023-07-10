import { Input as BaseInput, InputProps as BaseInputProps, InputRef } from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

type InputProps = PropsWithChildren<BaseInputProps>

interface InputType extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>> {
    Group: typeof BaseInput['Group'];
    Search: typeof BaseInput['Search'];
    TextArea: typeof BaseInput['TextArea'];
    Password: typeof BaseInput['Password'];
}

const Input = forwardRef<InputRef, InputProps>(function Input(props, ref) {
    return <BaseInput ref={ref} {...props} />;
}) as InputType;

Input.Group = BaseInput['Group'];
Input.Search = BaseInput['Search'];
Input.TextArea = BaseInput['TextArea'];
Input.Password = BaseInput['Password'];


export { Input };
export type { InputProps };
