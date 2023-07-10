import {
  Dropdown as BaseDropdown,
  DropdownProps as BaseDropdownProps,
  MenuProps as BaseMenuProps,
} from 'antd';

type DropdownProps = BaseDropdownProps;
type MenuProps = BaseMenuProps;

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    DropdownProps & React.RefAttributes<HTMLDivElement>
  > {
  Button: typeof BaseDropdown.Button;
}

const Dropdown = function Dropdown(props: DropdownProps) {
  const { className, ...rest } = props;

  return <BaseDropdown className={className} {...rest} />;
} as CompoundedComponent;

Dropdown.Button = BaseDropdown.Button;

export { Dropdown };
export type { DropdownProps };
export type { MenuProps };
