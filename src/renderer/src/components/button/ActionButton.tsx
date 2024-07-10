import { icons } from 'lucide-react';

import './ActionButton.css';

export type ActionButtonProps = {
  id: string;
  icon: string;
  size?: number;
  color?: string;
  title: string;
  small: boolean;
  variant?: string;
  onAction: (id: string) => void;
};

export default function ActionButton({
  id,
  icon,
  size,
  color,
  title,
  small,
  variant,
  onAction
}: ActionButtonProps): JSX.Element {
  const LucideIcon = icons[icon];
  const tempSize = size ?? 18;
  const tempVariant = variant ?? 'secondary';
  const tempIcon = color ? (
    <LucideIcon color={color} size={tempSize} className="app-icon" />
  ) : (
    <LucideIcon size={tempSize} className="app-icon" />
  );
  return (
    <button
      type="button"
      className={['app-action-button', small ? 'collapsed' : 'expanded', tempVariant].join(' ')}
      onClick={() => onAction(id)}
    >
      {tempIcon}
      <span className="app-title">{title}</span>
    </button>
  );
}
