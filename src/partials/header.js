import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="mdc-layout-grid header" role="banner">
                <div className="mdc-layout-grid__inner">
                    <div
                        className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6 mdc-layout-grid--align-left header__logo">
                        <Link to="/">{'Donatas Navidonskis'}</Link>
                    </div>
                    <nav
                        className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6 mdc-layout-grid--align-right header__navigation">
                        <NavLink to="/blog" activeClassName="active">{'Blog'}</NavLink>
                        <NavLink to="/about" activeClassName="active">{'About'}</NavLink>
                        <NavLink to="/contacts"
                                 className="mdc-button mdc-button--raised mdc-ripple-upgraded"
                                 activeClassName="active">{'Contacts'}</NavLink>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;