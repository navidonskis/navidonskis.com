import * as React from 'react';

class Main extends React.Component {

  render() {
    return (
      <main className="main">
        <div className="main__layout">
          <div className="main__container">{this.props.children}</div>
        </div>
      </main>
    );
  }
}

export default Main;
