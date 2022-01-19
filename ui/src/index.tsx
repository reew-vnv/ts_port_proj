import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { App } from './client/containers/app';
import { routes } from './client/routes';
import { NotFound } from './client/pages';

import { store } from './client/store';

const firebaseConfig = {
  apiKey: 'AIzaSyCn9nmmsM1Sv1gRbACZOyxSQVaz2jGGftU',
  authDomain: 'ts-portfolio-proj.firebaseapp.com',
  databaseURL: 'https://ts-portfolio-proj-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ts-portfolio-proj',
  storageBucket: 'ts-portfolio-proj.appspot.com',
  messagingSenderId: '44190684796',
  appId: '1:44190684796:web:6887c9435f82d6c74f5bf9',
  measurementId: 'G-B6JMGJX687',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    >
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
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root'),
);
