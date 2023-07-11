import { LoginPage } from '@/pages/LoginPage';
import { ConfigProvider, ThemeConfig } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DemoPage } from './pages/DemoPage';

const themeConfig: ThemeConfig = {
  components: {
    Pagination: {
      borderRadius: 8,
      colorBgContainer: '#2D5698',
      colorPrimary: '#FFF',
      colorPrimaryHover: '#FFF',
      colorText: '#B5B5C3',
    },
    Table: {
      colorBorder: '#E4E4E7',
      colorTextHeading: '#B5B5C3',
    },
  },
  token: {
    colorPrimary: '#2D5698',
    colorText: '#555555',
    colorTextLabel: '#555555',
    fontFamily:
      "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  },
};

const router = createBrowserRouter([
  {
    element: <DemoPage />,
    path: '/',
  },
  {
    element: <LoginPage />,
    path: '/login',
  },
]);

export default function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
