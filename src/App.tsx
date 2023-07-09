import { ConfigProvider } from 'antd';
import { Button } from './components/Button';

function ButtonSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Button type="primary">Primary Button</Button>
        <Button type="primary" ghost>
          Primary Ghost
        </Button>
        <Button type="default">Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="text">Text Button</Button>
      </div>
      <div className="flex flex-row gap-4">
        <Button type="primary" size="large">
          Large Primary Button
        </Button>
        <Button type="primary" ghost size="large">
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

function Example() {
  const sections = [
    ['Button', ButtonSection],
    ['Input', InputSection],
    ['Select', SelectSection],
    ['Checkbox', CheckboxSection],
    ['Radio', RadioSection],
    ['Table', TableSection],
  ] as const;

  return (
    <div className="flex flex-col gap-4 p-4">
      {sections.map(([title, Section]) => (
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
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
