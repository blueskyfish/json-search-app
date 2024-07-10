import { ReactNode } from 'react';

import './Page.css';

export type PageProps = {
  children: ReactNode;
};

export function Page({ children }: PageProps): ReactNode {
  return <div className="app-page-content">{children}</div>;
}
