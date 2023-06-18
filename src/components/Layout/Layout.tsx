import { Breadcrumbs, Header } from 'src/components';

import { LayoutProps } from './Layout.types';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      {children}
    </>
  );
};
