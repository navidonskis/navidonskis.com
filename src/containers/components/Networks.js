import React from 'react';

const sn = [
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

const Networks = () => (
  <nav className="footer__networks" itemScope itemType="http://schema.org/Person">
    {sn.map((item, index) => (
      <a itemProp="sameAs" className="footer__networks--link" href={item.url} key={index}>
        <i className={`icons icons__${item.type}`}/>
      </a>
    ))}
  </nav>
);

export default Networks;
