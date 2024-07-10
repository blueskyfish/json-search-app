import { ActionData } from '@renderer/components/action-list';
import Sidebar from '@renderer/components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Main } from '../components/box';
import { Routes } from './Routes';

const initActionList: ActionData[] = [
  {
    id: Routes.Home,
    icon: 'House',
    title: 'Home',
    selected: true
  },
  {
    id: Routes.Settings,
    icon: 'Settings',
    title: 'Settings',
    selected: false
  }
];

const selectActionList = (id: string, list: ActionData[]): ActionData[] => {
  return list.map((item) => ({
    ...item,
    selected: item.id === id
  }));
};

export default function RoutePage(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const [actionList, setActionList] = useState<ActionData[]>(initActionList);

  const onAction = (id: string): void => {
    setActionList(selectActionList(id, actionList));
    switch (id) {
      case 'home':
        navigate(Routes.Home);
        break;
      case 'settings':
        navigate(Routes.Settings);
        break;
    }
  };

  useEffect(() => {
    const paths = location.pathname.split('/').filter((path) => path !== '');
    for (const path of paths) {
      setActionList(selectActionList(path, actionList));
    }
  }, [location]);

  return (
    <>
      <Sidebar actionList={actionList} onAction={onAction} />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
