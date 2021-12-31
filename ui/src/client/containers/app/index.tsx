import React from 'react';
import '../../style.scss';
import 'semantic-ui-css/semantic.min.css';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../navigation';
import { Footer } from '../footer';

export const App = () => (
  <div className="app">
    <Navigation />
    <div className="app-content"><Outlet /></div>
    <Footer />
  </div>
);