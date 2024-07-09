import Versions from './components/Versions';
import './App.css';

export default function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h2 className="app-title">Json Searcher App</h2>
      <Versions></Versions>
    </>
  );
}
