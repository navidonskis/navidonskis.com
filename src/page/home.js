import * as React from 'react';
import Layout from '../component/layout';
import SwapWords from '../component/swap.words';

class Home extends React.Component {

  render() {
    return (
      <Layout className="home">
        <div className="home__container">
          <h2 className="home--title">
            Hello, my name is Donatas and I'm a <SwapWords /> from
            <a href="https://goo.gl/mdXy2c" target="_blank" rel="noopener noreferrer">Vilnius, Lithuania</a>
          </h2>
        </div>
      </Layout>
    );
  }
}

export default Home;
