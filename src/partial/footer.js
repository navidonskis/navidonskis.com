import React, {Component} from 'react';
import SocialLinks from '../component/social.links';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="footer__container">
                    <SocialLinks/>
                </div>
            </footer>
        );
    }
}

export default Footer;
