import { ConfigProvider, Tag } from 'antd';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from './components/Button';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function ButtonSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Button type="primary">Primary Button</Button>
        <Button ghost type="primary">
          Primary Ghost
        </Button>
        <Button type="default">Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="text">Text Button</Button>
      </div>
      <div className="flex flex-row gap-4">
        <Button size="large" type="primary">
          Large Primary Button
        </Button>
        <Button ghost size="large" type="primary">
          Large Primary Ghost
        </Button>
      </div>
    </div>
  );
}

function InputSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function SelectSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function CheckboxSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function RadioSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function TableSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function FormSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function ChartSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function PopoverSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function Example() {
  const sections = [
    ['Button', 'Dony', ButtonSection],
    ['Input', 'Ivan', InputSection],
    ['Select', 'Ivan', SelectSection],
    ['Checkbox', 'Ivan', CheckboxSection],
    ['Radio', 'Ivan', RadioSection],
    ['Table', 'Dony', TableSection],
    ['Form', 'Dony', FormSection],
    ['Chart', 'Dony', ChartSection],
    ['Popover', 'Dony', PopoverSection],
  ] as const;

  return (
    <div className="flex flex-col gap-4 p-4">
      {sections.map(([title, pic, Section]) => (
        <div key={title}>
          <h2 className="text-2xl font-bold">
            {title}
            <Tag
              className="ml-2 align-middle"
              color={pic === 'Dony' ? 'blue' : 'green'}
            >
              {pic}
            </Tag>
          </h2>
          <Section />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2D5698',
          fontFamily:
            "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        },
      }}
    >
      <Example />
    </ConfigProvider>
  );
}
