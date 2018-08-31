import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import ReactGA from 'react-ga';
import './sass/app.scss';

const FireTracking = () => ReactGA.pageview(window.location.hash);
const App = () => (
  <Router onUpdate={FireTracking}>
    <Routes/>
  </Router>
);

ReactGA.initialize('UA-72741925-1', { debug: true });

export default hot(module)(App);
