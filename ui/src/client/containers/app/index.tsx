import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../navigation';
import { Footer } from '../footer';
import { Auth } from '../auth';
import { Notification } from '../../controls';

import '../../style.scss';

export const App = () => {
  const isLogging = localStorage.getItem('isLogging');
  return (
    <div className="app">
      <Notification />
      {!isLogging
        ? <Auth />
        : (
          <>
            {' '}
            <Navigation />
            <div className="app-content"><Outlet /></div>
            <Footer />
          </>
        )}
    </div>
  );
};
