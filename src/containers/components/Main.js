import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <main className="main" role="main">
        <div className="main__container">
          <div className="main--content">
            {this.props.children}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
