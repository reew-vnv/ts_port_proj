import React from 'react';
import { routes } from "../../routes";
import { ItemNavi } from "./item_navi";

export const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className="list">
                    {routes.map((m, i) => <ItemNavi {...m} key={i} />)}
                </ul>
            </nav>
        </div>
    )
}