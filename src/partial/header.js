import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <header className="header" role="banner" {...this.props}>
        <div className="header__container">
          <div className="header__brandname">
            <Link to="/" className="header__brandname--link">
              {'navidonskis'}
            </Link>
          </div>
          <nav className="header__navigation">
            <NavLink to="/about" className="header__navigation--link active" activeClassName="active">{'About'}</NavLink>
            <NavLink to="/blog" className="header__navigation--link" activeClassName="active">{'Blog'}</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
