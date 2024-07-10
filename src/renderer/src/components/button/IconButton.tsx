import { icons } from 'lucide-react';
import { JSX } from 'react';

import './IconButton.css';

export type IconButtonProps = {
  id: string;
  icon: string;
  size?: number;
  color?: string;
  variant?: string;
  onAction: (id: string) => void;
};

export default function IconButton({
  id,
  icon,
  size,
  color,
  variant,
  onAction
}: IconButtonProps): JSX.Element {
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
      className={['app-icon-button', tempVariant].join(' ')}
      onClick={() => onAction(id)}
    >
      {tempIcon}
    </button>
  );
}
