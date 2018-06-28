import React, {Component} from "react";
import Layout from '../component/layout';

class Home extends Component {

    render() {
        return (
            <Layout className="home">
                <h2 className="home--title">
                    Hello, my name is Donatas Navidonskis and I'm a Software Engineer from
                    <a href="https://goo.gl/mdXy2c" target="_blank" rel="noopener noreferrer">Vilnius, Lithuania</a>.
                </h2>
            </Layout>
        );
    }
}

export default Home;
