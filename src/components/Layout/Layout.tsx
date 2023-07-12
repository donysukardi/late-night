import { PropsWithChildren } from 'react';
import { Header } from '../Header';

type LayoutProps = PropsWithChildren;

function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-screen-2xl px-6 py-6">{children}</div>
    </div>
  );
}

export { Layout };
