import React from 'react';
import { routes } from '../../routes';
import { ItemNavi } from './item_navi';
import './style.scss';
import { AlienSVG } from '../../tools/svg';
import { ClockComponent } from '../../components';

export const Navigation = () => (
  <nav className="navi">
    <ul className="navi_ul">
      <div className="navi_clock">
        <ClockComponent />
        <div className="navi_ul_items">{routes.map((m, i) => <ItemNavi {...m} key={i} />)}</div>
      </div>
      <div className="navi-icon"><AlienSVG size="28px" /></div>
    </ul>
  </nav>
);
