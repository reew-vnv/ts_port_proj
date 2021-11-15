import React from 'react';
import '../../style.css'
import {Navigation} from "../navigation";
import {Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div className="App">
            <Navigation/>
            <Outlet/>
        </div>
    );
}
