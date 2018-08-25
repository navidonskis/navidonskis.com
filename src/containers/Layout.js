import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Landscape from './components/Landscape';

class Layout extends Component {
  render () {
    const { bg, children, ...attr } = this.props;

    return (
      <div className="layout" {...attr}>
        <Header/>
        <Landscape bg={bg}/>
        <Main>
          {children}
        </Main>
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
  bg: PropTypes.string,
};

export default Layout;
