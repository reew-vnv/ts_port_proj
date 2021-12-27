import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { App } from './containers/app';
import { routes } from './routes';
import { NotFound } from './pages';

import { store } from './store';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
