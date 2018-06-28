import * as React from 'react';

class SocialLinks extends React.Component {

    links = [
        {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/navidonskis',
        },
        {
            type: 'facebook',
            url: 'https://www.facebook.com/donatas.navidonskis',
        },
        {
            type: 'twitter',
            url: 'https://twitter.com/navidonskis',
        },
        {
            type: 'github',
            url: 'https://github.com/doniz',
        },
    ];

    render() {
        return (
            <nav className="social" itemScope itemType="http://schema.org/Person">
                {this.links.map((item, index) => (
                    <a itemProp="sameAs" href={item.url} key={index}>
                        <i className={`icons icons__${item.type}`}/>
                    </a>
                ))}
            </nav>
        );
    }
}

export default SocialLinks;
