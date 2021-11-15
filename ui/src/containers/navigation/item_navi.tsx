import React from 'react';
import {NavLink} from 'react-router-dom';

interface Navi {
    path: string,
    label: string
}

export const ItemNavi = (props: Navi) => {
    const {
        path, label
    } = props;
    return (
        <NavLink
            to={`${path}`}
            title={label}
            // activeStyle={{
            //     color: "#222830"
            // }}
        >
            <div className="navi_item">
                <span>{label}</span>
            </div>
        </NavLink>
    )
}