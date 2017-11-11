import React, {Component} from 'react';
import Layout from '../../components/layout';
import file from 'md-to-react!./index.md'

class About extends Component {
    render() {
        return (
            <Layout className="about" title={file.title} description={file.description}>
                {file.render()}
            </Layout>
        );
    }
}

export default About;