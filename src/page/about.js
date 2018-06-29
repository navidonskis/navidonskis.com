import React, {Component} from "react";
import Layout from "../component/layout";

class About extends Component {

    render() {
        return (
            <Layout className="about">
                <h1 className="mdc-typography--headline1">About</h1>

                <p className="mdc-typography--body1">
                    Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore
                    eu fugiat nulla pariatur.
                </p>
            </Layout>
        );
    }
}

export default About;
