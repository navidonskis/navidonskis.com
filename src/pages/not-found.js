import React, {Component} from 'react';
import Layout from '../components/layout';
import PropTypes from 'prop-types';

const propTypes = {
    location: PropTypes.object.isRequired
};

class NotFound extends Component {

    render() {
        let pathname = this.props.location.pathname;

        return (
            <Layout className="not-found" title="Page not found" description="">
                <h1 className="mdc-typography--display1">{'Page Not Found'}</h1>

                <p>The path <code>{pathname}</code> did not match any routes.</p>
            </Layout>
        );
    }
}

NotFound.propTypes = propTypes;

export default NotFound;