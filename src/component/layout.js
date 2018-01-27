import * as React from 'react';
import Header from '../partial/header';
import Main from '../partial/main';
import Footer from '../partial/footer';

class Layout extends React.Component {

  render() {
    return (
      <div {...this.props}>
        <Header />
        <Main>{this.props.children}</Main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
