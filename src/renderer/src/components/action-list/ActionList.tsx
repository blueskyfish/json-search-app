import ActionItem from './ActionItem';
import { ActionData } from './ActionModel';

import './ActionList.css';

export type ActionListProps = {
  actionList: ActionData[];
  size?: number;
  small: boolean;
  onAction: (id: string) => void;
};

export default function ActionList({
  actionList,
  size,
  small,
  onAction
}: ActionListProps): JSX.Element {
  return (
    <ul className={['app-action-list', small ? 'collapsed' : 'expaned'].join(' ')}>
      {actionList.map(({ id, icon, title, selected }: ActionData) => (
        <ActionItem
          key={id}
          id={id}
          icon={icon}
          size={size}
          title={title}
          variant={['transparent', selected ? 'active' : ''].join(' ')}
          onAction={onAction}
        />
      ))}
    </ul>
  );
}
