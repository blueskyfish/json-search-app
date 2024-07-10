import { ReactNode } from 'react';
import './Footer.css';

export type FooterProps = {
  children: ReactNode;
};

export function Footer({ children }: FooterProps): ReactNode {
  return <footer className="app-page-footer">{children}</footer>;
}
