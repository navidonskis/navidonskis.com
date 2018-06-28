import React, {Component} from "react";
import Layout from "../component/layout";

class Blog extends Component {

    render() {
        return (
            <Layout className="blog">
                <div className="blog__container">
                    <h1 className="blog--title">Blog</h1>
                </div>
            </Layout>
        );
    }
}

export default Blog;
