import React, {Component} from 'react';
import Layout from '../components/layout';
import {About, LatestPosts} from '../blocks';

class Home extends Component {
    render() {
        return (
            <Layout className="home">
                <About/>
                <LatestPosts/>
            </Layout>
        );
    }
}

export default Home;