import React from 'react';
import { useDispatch } from 'react-redux';
import { routes } from '../../routes';
import { ItemNavi } from './item_navi';
import { AlienSVG, LogOutSVG } from '../../tools/svg';
import { ClockComponent } from '../../components';
import { log_out } from '../auth/actions';
import { updateAuth } from '../../slices/auth_page';
import './style.scss';

export const Navigation = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(log_out());
    localStorage.clear();
    dispatch(updateAuth({
      isLogging: false,
    }));
  };
  return (
    <nav className="navi">
      <ul className="navi_ul">
        <div className="navi_clock">
          <ClockComponent />
          <div className="navi_ul_items">{routes.map((m, i) => <ItemNavi {...m} key={i} />)}</div>
        </div>
        <div className="navi-icon">
          <AlienSVG size="28px" />
          <div className="log-out-icon" onClick={handleLogOut}><LogOutSVG size="28px" /></div>
        </div>
      </ul>
    </nav>
  );
};
