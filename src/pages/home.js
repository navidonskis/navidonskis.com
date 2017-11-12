import React, {Component} from 'react';
import Layout from '../components/layout';

class Home extends Component {
    render() {
        return (
            <Layout className="home">
                <h1 className="mdc-typography--display1">{'Home'}</h1>
            </Layout>
        );
    }
}

export default Home;