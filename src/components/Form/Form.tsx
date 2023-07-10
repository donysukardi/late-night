/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/utils';
import { Form as BaseForm, FormProps as BaseFormProps } from 'antd';
import { PropsWithChildren } from 'react';

type FormProps<Values extends Record<string, unknown>> = PropsWithChildren<
  BaseFormProps<Values>
>;

function Form<Values extends Record<string, unknown>>(
  props: FormProps<Values>,
) {
  const { size = 'large', className, ...rest } = props;
  return (
    <BaseForm<Values>
      className={cn('[&_.ant-form-item-label]:font-medium', className)}
      size={size}
      {...rest}
    />
  );
}

Form.useForm = BaseForm.useForm;
Form.useFormInstance = BaseForm.useFormInstance;
Form.useWatch = BaseForm.useWatch;
Form.Item = BaseForm.Item;
Form.List = BaseForm.List;
Form.ErrorList = BaseForm.ErrorList;
Form.Provider = BaseForm.Provider;

export { Form };
export type { FormProps };
