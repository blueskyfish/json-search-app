import { icons } from 'lucide-react';

import './ActionItem.css';

export type ActionItemProps = {
  id: string;
  icon: string;
  iconStyle?: string;
  size?: number;
  color?: string;
  title: string;
  variant: string;
  onAction: (id: string) => void;
};

export default function ActionItem({
  id,
  icon,
  iconStyle,
  title,
  size,
  color,
  variant,
  onAction
}: ActionItemProps): JSX.Element {
  const LucideIcon = icons[icon];
  const tempSize = size ?? 18;
  const tempIcon = color ? (
    <LucideIcon color={color} size={tempSize} className={iconStyle ?? 'app-icon'} />
  ) : (
    <LucideIcon size={tempSize} className={iconStyle ?? 'app-icon'} />
  );
  return (
    <li className={['app-action-item', variant].join(' ')} onClick={() => onAction(id)}>
      {tempIcon}
      <span className="app-title">{title}</span>
    </li>
  );
}
