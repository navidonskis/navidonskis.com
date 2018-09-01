import React, { Component } from 'react';
import { NavLink } from 'react-static';
import ReactGA from 'react-ga';

class Navigation extends Component {

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMobileClick = this.handleMobileClick.bind(this);
    this.navigation = React.createRef();

    this.state = {
      open: false,
    };
  }

  handleMobileClick () {
    const openHandler = !this.state.open;

    if (openHandler) {
      document.body.className = 'mobile-menu';
    } else {
      document.body.className = '';
    }

    this.setState({ open: openHandler });
  }

  handleClick () {
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Link',
    });
  }

  render () {
    return (
      <nav ref={this.navigation} role="navigation" className={`navigation ${this.state.open && ('navigation--open')}`}
           itemScope itemType="https://schema.org/SiteNavigationElement">
        <svg width="16" height="14" className="navigation--button" onClick={this.handleMobileClick}>
          <path d="M12 6v2H0V6zm4-6v2H0V0zm0 12v2H0v-2z" fill="currentColor" fillRule="evenodd"/>
        </svg>
        <NavLink exact to="/" className="navigation--link" onClick={this.handleClick}>
          <span itemProp="name">Home</span>
        </NavLink>
        <NavLink to="/about/" className="navigation--link" onClick={this.handleClick}>
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
