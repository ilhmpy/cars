import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from './model/Router';
import { ErrorBoundary } from './ui';
import App from './App';
import './styles/App.css';

ReactDOM.render((
  <ErrorBoundary>
    <Router history={history}>
      <App />
    </Router>
  </ErrorBoundary>
), document.getElementById('root'));