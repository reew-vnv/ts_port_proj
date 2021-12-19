import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './containers/app';
import { routes } from './routes';
import { NotFound } from './pages';

import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {routes
            .map(({ path, element: Component }, i) => (
              <Route
                key={i}
                path={`${path}`}
                element={<Component />}
              />
            ))}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
