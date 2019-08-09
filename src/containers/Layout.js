import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from './components/Head';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Landscape from './components/Landscape';

class Layout extends Component {

  render () {
    const { bg, children, head, ...attr } = this.props;

    return (
      <div className="layout" {...attr}>
        <Head {...head}/>
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
  head: PropTypes.object,
};

export default Layout;
