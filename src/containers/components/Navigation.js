import React from 'react';
import { NavLink } from 'react-static';

const Navigation = () => (
  <nav role="navigation" className="navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
    <NavLink exact to="/" className="navigation--link">
      <span itemProp="name">Home</span>
    </NavLink>
    <NavLink to="/about" className="navigation--link">
      <span itemProp="name">About</span>
    </NavLink>
    <NavLink to="/blog" className="navigation--link">
      <span itemProp="name">Writing</span>
    </NavLink>
  </nav>
);

export default Navigation;
