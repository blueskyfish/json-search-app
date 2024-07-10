import { ReactNode } from 'react';
import './Body.css';

export type BodyProps = {
  children: ReactNode;
};

export function Body({ children }: BodyProps): ReactNode {
  return <div className="app-page-body">{children}</div>;
}
