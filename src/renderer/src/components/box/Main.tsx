import './Main.css';

export type MainProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Main({ children }: MainProps): JSX.Element {
  return <main className="">{children}</main>;
}
