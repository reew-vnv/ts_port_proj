import React from 'react';
import {routes} from "../../routes";
import {ItemNavi} from "./item_navi";
import './style.css';

export const Navigation = () => {
    return (
        <nav className="navi">
            <ul className="navi_ul">
                {routes.map((m, i) => <ItemNavi {...m} key={i}/>)}
            </ul>
        </nav>
    )
}