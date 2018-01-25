import * as React from 'react';
import Header from '../partial/header';

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
