import React from 'react';
import { routes } from '../../routes';
import { ItemNavi } from './item_navi';
import './style.scss';

export const Navigation = () => (
  <nav className="navi">
    <ul className="navi_ul">
      {routes.map((m, i) => <ItemNavi {...m} key={i} />)}
    </ul>
  </nav>
);
