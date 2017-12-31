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
        siteName: 'navidonskis.com',
        socialNetworks: [
            {
                type: 'linkedin',
                url: 'https://www.linkedin.com/in/navidonskis'
            },
            {
                type: 'facebook',
                url: 'https://www.facebook.com/donatas.navidonskis'
            },
            {
                type: 'twitter',
                url: 'https://twitter.com/navidonskis'
            },
            {
                type: 'github',
                url: 'https://github.com/doniz'
            }
        ]
    };
};

class Layout extends Component {

    render() {
        const defaults = getDefaults(this.props);
        const networks = defaults.socialNetworks;

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

                <Footer>
                    <div className="mdc-layout-grid__inner">
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
                            <h2 className="heading-line heading-line--secondary">{'Contact me'}</h2>

                            <img src="/dist/images/profile.jpg" alt="Donatas Navidonskis" className="image__rounded"/>
                            <p className="footer__content">If you want to hire me, fill in the form or use one of the contact details below.</p>

                            <div className="inline-items">
                                {networks.map((item, index) => {
                                    return (
                                        <a rel="me" target="_blank" href={item.url} className="inline-items__item"
                                           key={index} title={item.type}>
                                            <i className={`icons icons__${item.type}`}></i>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
                            <p>&copy; <Link to="https://www.navidonskis.com" target={'_blank'}>navidonskis.com</Link>
                            </p>
                        </div>
                    </div>
                </Footer>
            </div>
        );
    }
}

export default Layout;