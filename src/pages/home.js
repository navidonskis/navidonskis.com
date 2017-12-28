import React, {Component} from 'react';
import Layout from '../components/layout';
import {About, LatestPosts, CurrentPlace} from '../blocks';

class Home extends Component {
    render() {
        return (
            <Layout className="home">
                <About id="about-block"/>
                <LatestPosts/>
                <CurrentPlace link="https://goo.gl/mdXy2c" />
            </Layout>
        );
    }
}

export default Home;