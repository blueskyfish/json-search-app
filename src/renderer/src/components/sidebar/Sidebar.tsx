import './Sidebar.css';
import ActionList from '../action-list/ActionList';
import { ActionData } from '../action-list';
import { useState } from 'react';
import ActionButton from '../button/ActionButton';

export type SidebarProps = {
  actionList: ActionData[];
  onAction: (id: string) => void;
};

/**
 * Sidebar with topics / themes
 * @returns Sidebar element
 */
export default function Sidebar({ actionList, onAction }: SidebarProps): JSX.Element {
  const [collapsed, setCollapsed] = useState(true);

  const handleAction = (id: string): void => {
    switch (id) {
      case 'sizer':
        setCollapsed(!collapsed);
        break;
      default:
        console.log('> Route to action =>', id);
        onAction(id);
        break;
    }
  };

  return (
    <aside className={['app-sidebar', collapsed ? 'collapsed' : 'expanded'].join(' ')}>
      <ActionList actionList={actionList} onAction={onAction} small={collapsed} />
      <div className="app-divider">&nbsp;</div>
      <ActionButton
        id="sizer"
        size={18}
        icon={ collapsed ? 'ArrowRight' : 'ArrowLeft'}
        title={collapsed ? 'Expanding' : 'Collapsing'}
        small={collapsed}
        variant="transparent"
        onAction={handleAction}
      />
    </aside>
  );
}
