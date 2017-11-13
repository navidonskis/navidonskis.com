import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../partials/header';
import Footer from '../partials/footer';
import {Helmet} from "react-helmet";

const getDefaults = (props) => {
    let getTitle = () => {
        let title = props.title || '';

        return '' !== title ? `${title} - ` : '';
    };

    let getDescription = () => {
        let description = 'Donatas is a Software and System Engineer. He work with Backend, Frontend sides and Devops stuffs. ' +
            'He is highly motivated and result-oriented. Let\'s have a tentative talk about your project.';

        return 'description' in props ? props.description : description;
    };

    return {
        description: getDescription(),
        title: getTitle() + 'navidonskis.com',
        twitterUsername: '@navidonskis.com',
        siteName: 'navidonskis.com'
    };
};

class Layout extends Component {

    render() {
        const defaults = getDefaults(this.props);

        return (
            <div className={`layout ${this.props.className}`}>
                <Helmet>
                    <title>{defaults.title}</title>
                    <meta name="twitter:site" content={defaults.twitterUsername}/>
                    <meta name="og:type" content="website"/>
                    <meta name="og:site_name" content={defaults.siteName}/>
                    <meta name="og:description" content={defaults.description}/>
                </Helmet>

                <Header/>

                <main>{this.props.children}</main>

                {/*className="mdc-layout-grid"*/}

                <Footer>
                    <p>&copy; <Link to="https://www.navidonskis.com" target={'_blank'}>navidonskis.com</Link></p>
                </Footer>
            </div>
        );
    }
}

export default Layout;