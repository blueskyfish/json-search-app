export type BoxProps = {
  classList: string;
  children: JSX.Element | JSX.Element[];
};

export default function Box({ classList, children }: BoxProps): JSX.Element {
  return <div className={classList}>{children}</div>;
}
