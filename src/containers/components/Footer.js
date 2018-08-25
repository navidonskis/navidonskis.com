import React from 'react';
import Networks from './Networks';

const Footer = props => (
  <footer className="footer" role="contentinfo" {...props}>
    <Networks/>
    <div className="footer__info">
      <span className="footer__info--col">&copy; navidonskis.com</span>
      <span className="footer__info--col"><a href="mailto:donatas@navidonskis.com">donatas@navidonskis.com</a></span>
      <span className="footer__info--col"><a href="tel:+37067078495">+370 670 78495</a></span>
    </div>
  </footer>
);

export default Footer;
