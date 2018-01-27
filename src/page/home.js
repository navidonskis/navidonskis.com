import * as React from 'react';
import Layout from '../component/layout';

class Home extends React.Component {

  render() {
    return (
      <Layout className="home">
        <div className="home__container">
          <h2 className="home--title padded-multiline">
            <span>
              <span>Hello, my name is Donatas and i'm a Software Engineer from</span>
            </span>
          </h2>
        </div>
      </Layout>
    );
  }
}

export default Home;
