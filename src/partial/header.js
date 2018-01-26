import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {

  state = {
    opened: false,
    toggleClass: '',
  };

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    let className = 'header__navigation--opened';

    if (this.state.opened === true) {
      className = '';
    }

    this.setState({
      toggleClass: className,
      opened: !this.state.opened,
    });

    return false;
  }

  render() {
    return (
      <header className="header" role="banner" {...this.props}>
        <div className="header__container">
          <div className="header__brandname">
            <Link to="/" className="header__brandname--link">
              {'navidonskis'}
            </Link>
          </div>
          <nav className={`header__navigation ${this.state.toggleClass}`}>
            <div className="header__navigation--overlay" />
            <NavLink to="#" className="header__navigation--toggle-menu" onClick={this.toggleMenu}>. . .</NavLink>
            <NavLink to="/about" className="header__navigation--link" activeClassName="active">{'About'}</NavLink>
            <NavLink to="/blog" className="header__navigation--link" activeClassName="active">{'Blog'}</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
