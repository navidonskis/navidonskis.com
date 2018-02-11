import * as React from 'react';
import SocialLinks from '../component/social.links';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <SocialLinks />
        </div>
      </footer>
    );
  }
}

export default Footer;
