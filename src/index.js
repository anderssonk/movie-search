// NPM Packages
import React from 'react';
import ReactDOM from 'react-dom';

// Project files
import { MovieProvider } from 'state/MovieProvider';
import { StatusProvider } from 'state/StatusProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <StatusProvider>
        <App />
      </StatusProvider>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
