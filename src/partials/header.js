import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header" role="banner">
                <div className="header__logo">
                    <Link to="/">{'Donatas Navidonskis'}</Link>
                </div>
                <nav className="header__navigation">
                    <NavLink to="/about" activeClassName="active">{'About'}</NavLink>
                    <NavLink to="/blog" activeClassName="active">{'Blog'}</NavLink>
                    <NavLink to="/contacts"
                             className="mdc-button mdc-button--raised"
                             activeClassName="active">{'Contacts'}</NavLink>
                </nav>
            </header>
        );
    }
}

export default Header;