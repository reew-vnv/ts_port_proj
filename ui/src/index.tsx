import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './containers/app';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {NotFound} from "./pages";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                {routes
                    .map(({path, element: Component}, i) => {
                        return (
                            <Route
                                key={i}
                                path={`${path}`}
                                element={<Component/>}
                            />
                        );
                    })}
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root'));

