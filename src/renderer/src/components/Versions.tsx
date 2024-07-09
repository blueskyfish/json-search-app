import { useState } from 'react';
import './Versions.css';

export default function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions);

  return (
    <ul className="app-versions">
      <li className="app-version electron-version">Electron v{versions.electron}</li>
      <li className="app-version chrome-version">Chromium v{versions.chrome}</li>
      <li className="app-version node-version">Node v{versions.node}</li>
    </ul>
  );
}
