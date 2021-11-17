import React from 'react';
import '../../style.scss';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../navigation';

export const App = () => (
  <div className="app">
    <Navigation />
    <Outlet />
  </div>
);
