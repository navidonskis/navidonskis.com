import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      toggleClass: '',
      routes: [
        {
          url: '/about',
          title: 'About',
        },
        {
          url: '/blog',
          title: 'Blog',
        },
      ],
    };

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
    const BrandLink = () => (
      <div className="header__brandname">
        <Link to="/" className="header__brandname--link">
          {'navidonskis'}
        </Link>
      </div>
    );

    const NavigationOptions = {
      className: 'header__navigation--link',
      activeClassName: 'active',
    };

    return (
      <header className="header" role="banner" {...this.props}>
        <div className="header__container">
          <BrandLink />
          <nav className={`header__navigation ${this.state.toggleClass}`} itemScope itemType="https://schema.org/SiteNavigationElement">
            <div className="header__navigation--overlay" onClick={this.toggleMenu} />
            <NavLink to="#" className="header__toggle-menu" onClick={this.toggleMenu}>
              <div className="header__toggle-menu--container">
                <span />
                <span />
                <span />
              </div>
            </NavLink>
            {this.state.routes.map((item, index) => (
              <NavLink to={item.url} {...NavigationOptions} key={index} itemProp="url">
                <span itemProp="name">{item.title}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
