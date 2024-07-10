import React from 'react';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import RoutePage from './pages/RoutePage';
import HomePage from './pages/HomePage';
import { Routes } from './pages/Routes';
import SettingsPage from './pages/SettingsPage';

const router = createHashRouter([
  {
    path: Routes.Root,
    element: <RoutePage />,
    children: [
      {
        path: Routes.Home,
        element: <HomePage />
      },
      {
        path: Routes.Settings,
        element: <SettingsPage />
      },
      {
        path: '',
        element: <Navigate to={Routes.Home} />
      }
    ]
  }
]);

export default function App(): React.JSX.Element {
  return <RouterProvider router={router} />;
}
