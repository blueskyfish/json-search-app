import { ArrowLeft } from 'lucide-react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export type HeaderProps = {
  backward?: boolean;
  title: string;
  children?: JSX.Element | JSX.Element[];
};

export function Header({ title, backward, children }: HeaderProps): JSX.Element {
  const navigate = useNavigate();
  const backwardIcon = backward ? (
    <ArrowLeft
      size={24}
      onClick={() => {
        navigate(-1);
      }}
      className="app-page-backward"
    />
  ) : null;
  return (
    <header className="app-page-header">
      {backwardIcon}
      <h2 className="app-title">{title}</h2>
      <div className="app-divider">&nbsp;</div>
      <>{children}</>
    </header>
  );
}
