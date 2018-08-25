import React from 'react';
import { Link } from 'react-static';
import Navigation from './Navigation';

const Header = props => (
  <header className="header" role="banner" {...props}>
    <div className="header--logo">
      <Link to="/">navidonskis</Link>
    </div>
    <Navigation/>
  </header>
);

export default Header;
