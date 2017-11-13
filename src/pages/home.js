import React, {Component} from 'react';
import Layout from '../components/layout';
import About from '../blocks/about';

class Home extends Component {
    render() {
        return (
            <Layout className="home">
                <About/>
            </Layout>
        );
    }
}

export default Home;