import React, {Component} from "react";
import Layout from "../component/layout";

// https://material-components.github.io/material-components-web-catalog/#/component/typography
// https://github.com/material-components/material-components-web/tree/master/packages/mdc-typography
class Blog extends Component {

    render() {
        return (
            <Layout className="blog">
                <h1 className="mdc-typography--headline1">Blog</h1>
            </Layout>
        );
    }
}

export default Blog;
