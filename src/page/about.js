import React, {Component} from "react";
import Layout from "../component/layout";

class About extends Component {

    render() {
        return (
            <Layout className="about">
                <div className="about__container">
                    <h1 className="about--title">About</h1>

                    <h6 className="mdc-typography--headline6">Styles</h6>
                    <h1 className="mdc-typography--headline1">Headline 1</h1>
                    <h2 className="mdc-typography--headline2">Headline 2</h2>
                    <h3 className="mdc-typography--headline3">Headline 3</h3>
                    <h4 className="mdc-typography--headline4">Headline 4</h4>
                    <h5 className="mdc-typography--headline5">Headline 5</h5>
                    <h6 className="mdc-typography--headline6">Headline 6</h6>
                    <h6 className="mdc-typography--subtitle1">Subtitle 1</h6>
                    <h6 className="mdc-typography--subtitle2">Subtitle 2</h6>
                    <p className="mdc-typography--body1">
                        Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                </div>
            </Layout>
        );
    }
}

export default About;
