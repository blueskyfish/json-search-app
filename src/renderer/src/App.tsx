import Versions from './components/Versions';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/box/Main';
import { useState } from 'react';
import { ActionData } from './components/action-list';

export default function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const [actionList, setActionList] = useState<ActionData[]>([
    {
      id: 'home',
      icon: 'House',
      title: 'Home',
      selected: false
    },
    {
      id: 'settings',
      icon: 'Settings',
      title: 'Settings',
      selected: false
    }
  ]);

  const onAction = (id: string): void => {
    console.log('> Choose action =>', id);
    const tempList = actionList.map((item) => {
      return {
        ...item,
        selected: id === item.id
      };
    });
    setActionList(tempList);
  };

  return (
    <>
      <Sidebar actionList={actionList} onAction={onAction} />
      <Main>
        <h2 className="app-title">Json Searcher App</h2>
        <Versions></Versions>
      </Main>
    </>
  );
}
