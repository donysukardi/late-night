import { Button } from '@/components/Button';
import { Dropdown, MenuProps } from '@/components/Dropdown';
import logoSrc from '@/images/logo.png';
import { cn } from '@/utils';
import { theme } from 'antd';
import {
  Logout as LogoutIcon,
  Profile as ProfileIcon,
  Setting2 as SettingIcon,
} from 'iconsax-react';
import { cloneElement, HTMLProps } from 'react';

const { useToken } = theme;

type MenuLinkProps = HTMLProps<HTMLAnchorElement> & {
  active?: boolean;
};

function MenuLink(props: MenuLinkProps) {
  const { active, ...rest } = props;
  return (
    <a
      className={cn(
        'relative whitespace-nowrap px-2 py-3 text-primary no-underline hover:text-primary-400',
        active && [
          'font-medium',
          'after:absolute after:bottom-1 after:left-2 after:right-2 after:h-[2px] after:bg-primary after:content-[""]',
        ],
      )}
      {...rest}
    />
  );
}

function DropdownMenuSection() {
  const items: MenuProps['items'] = [
    {
      icon: <ProfileIcon size="1.25em" />,
      key: '1',
      label: (
        <a
          href="https://www.antgroup.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Account Settings
        </a>
      ),
    },
    {
      icon: <LogoutIcon size="1.25em" />,
      key: '2',
      label: (
        <a
          href="https://www.antgroup.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Logout
        </a>
      ),
    },
  ];

  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
    minWidth: 180,
  };

  const menuStyle = {
    boxShadow: 'none',
  };

  return (
    <Dropdown
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          <div className="px-4 pt-3 font-medium">Settings</div>
          {cloneElement(menu as React.ReactElement, { style: menuStyle })}
        </div>
      )}
      menu={{ items }}
      placement="bottomRight"
      trigger={['click']}
    >
      <Button icon={<SettingIcon color="#2d5698" />} type="text" />
    </Dropdown>
  );
}

const menuItems = [
  'Home',
  'Member',
  'Training Report',
  'Goal Setting',
  'Schedule',
  'Scenario',
];

function Header() {
  return (
    <header className="border-b border-solid border-[#E4E4E7]">
      <div className="mx-auto flex max-w-screen-2xl flex-row gap-4 px-6 py-6">
        <div className="flex min-w-min flex-1 basis-0 items-center">
          <img alt="" className="h-12" src={logoSrc} />
        </div>
        <nav className="flex flex-1 items-center justify-center">
          <ul className="m-0 flex list-none flex-row justify-center gap-8 p-0">
            {menuItems.map((menuItem, idx) => (
              <li key={menuItem}>
                <MenuLink active={idx === 0} href="#">
                  {menuItem}
                </MenuLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex min-w-min flex-1 basis-0 items-center justify-end gap-4">
          <DropdownMenuSection />
          <p className="m-0 min-w-[64px]">
            Hello,
            <br />
            <span className="font-medium">Hanh Hannah</span>
          </p>
        </div>
      </div>
    </header>
  );
}

export { Header };
