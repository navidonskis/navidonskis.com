import React, { Component } from 'react';
import { Head as Helmet } from 'react-static';
import PropTypes from 'prop-types';
import structuredData from '../../assets/structure-data';

class Head extends Component {

  getDefaultMeta () {
    return [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@navidonskis' },
      { name: 'twitter:creator', content: '@navidonskis' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: this.props.location },
    ];
  }

  /**
   * @return {Array}
   */
  getMeta () {
    const meta = [];

    if (this.props.description) {
      meta.push({ name: 'description', content: this.props.description });
      meta.push({ name: 'og:description', content: this.props.description });
      meta.push({ name: 'twitter:description', content: this.props.description });
    }

    if (this.props.title) {
      meta.push({ name: 'og:title', content: this.props.title });
      meta.push({ name: 'twitter:title', content: this.props.title });
    }

    return [...meta, ...this.getDefaultMeta()].sort((a, b) => {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });
  }

  /**
   * @return {*}
   */
  render () {
    const meta = this.getMeta();
    const data = JSON.stringify(structuredData);

    return (
      <Helmet>
        {this.props.title && <title>{this.props.title}</title>}
        {meta && meta.map((item, index) =>
          <meta key={index} name={item.name} content={item.content}/>
        )}

        {/*<link rel="canonical" href="{window.location}" />*/}
        {/*<meta property="og:image:width" content="1200"/>*/}
        {/*<meta property="og:image:height" content="630"/>*/}
        {/*<meta property="og:url" content="https://www.veed.io/"/>*/}
        {/*<meta property="og:title" content="VEED - Create, Edit & Share Videos Online for free"/>*/}
        {/*<meta property="og:description"*/}
        {/*content="Veed is a simple but powerfull video editor, try our free video editor to, resize video, trim video add loads more!"/>*/}
        {/*<meta property="og:image" content="https://www.veed.io/fav/og-image.png"/>*/}
        {/*<meta property="og:image:url" content="https://www.veed.io/fav/og-image.png"/>*/}

        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
        <link rel="manifest" href="/assets/manifest.json"/>
        <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#000000"/>
        <link rel="shortcut icon" href="/assets/favicon.ico"/>
        <meta name="apple-mobile-web-app-title" content="navidonskis"/>
        <meta name="application-name" content="navidonskis"/>
        <meta name="msapplication-config" content="/assets/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
        <script type="application/ld+json">{data}</script>
      </Helmet>
    );
  }
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.object,
};

export default Head;
