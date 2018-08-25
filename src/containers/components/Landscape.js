import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bgImage from '../../images/bg-01.jpg';

class Landscape extends Component {
  render () {
    const styles = {
      backgroundImage: `url(${this.props.bg})`,
    };

    return (
      <section className="landscape">
        <div className="landscape__overlay">
          <div className="landscape--background" style={styles}/>
        </div>
      </section>
    );
  }
}

Landscape.propTypes = {
  bg: PropTypes.string,
};

Landscape.defaultProps = {
  bg: bgImage,
};

export default Landscape;
