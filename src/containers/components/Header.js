import React, { Component } from 'react';
import { Link } from 'react-static';
import Navigation from './Navigation';
import ReactGA from 'react-ga';

class Header extends Component {

  constructor (props) {
    super(props);

    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleLogoClick () {
    ReactGA.event({
      category: 'Logo',
      action: 'Clicked Link',
    });
  }

  render () {
    return (
      <header className="header" role="banner" {...this.props}>
        <div className="header--logo">
          <Link to="/" onClick={this.handleLogoClick}>navidonskis</Link>
        </div>
        <Navigation/>
      </header>
    );
  }
}

export default Header;
