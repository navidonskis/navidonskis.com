import React, { Component } from 'react';
import { NavLink } from 'react-static';
import ReactGA from 'react-ga';

class Navigation extends Component {

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Link',
    });
  }

  render () {
    return (
      <nav role="navigation" className="navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
        <NavLink exact to="/" className="navigation--link" onClick={this.handleClick}>
          <span itemProp="name">Home</span>
        </NavLink>
        <NavLink to="/about" className="navigation--link" onClick={this.handleClick}>
          <span itemProp="name">About</span>
        </NavLink>
        {/*<NavLink to="/blog" className="navigation--link">*/}
        {/*<span itemProp="name">Writing</span>*/}
        {/*</NavLink>*/}
      </nav>
    );
  }
}

export default Navigation;
