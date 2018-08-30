import React, { Component } from 'react';
import { Head as Helmet } from 'react-static';
import PropTypes from 'prop-types';

class Head extends Component {

  getDefaultMeta () {
    return [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@navidonskis' },
      { name: 'twitter:creator', content: '@navidonskis' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: window.location },
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

    return (
      <Helmet>
        {this.props.title && <title>{this.props.title}</title>}
        {meta && meta.map((item, index) =>
          <meta key={index} name={item.name} content={item.content}/>
        )}
      </Helmet>
    );
  }
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head;
