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

function Example() {
  return (
    <div className="flex gap-4 p-4">
      <ButtonSection />
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
