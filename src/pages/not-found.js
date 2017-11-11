import React, {Component} from 'react';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';

const propTypes = {
    location: PropTypes.object.isRequired
};

class NotFound extends Component {

    render() {
        let pathname = this.props.location.pathname;

        return (
            <Layout className="not-found">
                <h1>Page Not Found</h1>

                <p>The path <code>{pathname}</code> did not match any routes.</p>
            </Layout>
        );
    }
}

NotFound.propTypes = propTypes;

export default NotFound;