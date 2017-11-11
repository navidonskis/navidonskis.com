import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../partials/header';
import Footer from '../partials/footer';

class Layout extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Header>
                    <Link to="/">{'Home'}</Link>
                    <Link to="/blog">{'Blog'}</Link>
                    <Link to="/about">{'About'}</Link>
                    <Link to="/contacts">{'Contacts'}</Link>
                </Header>

                <main className="container">{this.props.children}</main>

                <Footer>
                    <p>&copy; <Link to="https://www.navidonskis.com" target={'_blank'}>navidonskis.com</Link></p>
                </Footer>
            </div>
        );
    }
}

export default Layout;