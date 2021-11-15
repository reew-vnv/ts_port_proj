import React from 'react';
import '../../style.scss'
import {Navigation} from "../navigation";
import {Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div className="app">
            <Navigation/>
            <Outlet/>
        </div>
    );
}
