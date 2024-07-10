import './Main.css';
import { ReactNode } from 'react';

export type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps): ReactNode {
  return <main className="app-main">{children}</main>;
}
