import React, {Component} from "react";
import Layout from '../component/layout';

class Home extends Component {

    render() {
        return (
            <Layout className="home">
                <div className="home__container">
                    <h2 className="home--title">
                        Hello, my name is Donatas Navidonskis and I'm a Software Engineer from
                        <a href="https://goo.gl/mdXy2c" target="_blank" rel="noopener noreferrer">Vilnius, Lithuania</a>.
                    </h2>
                </div>
            </Layout>
        );
    }
}

export default Home;
