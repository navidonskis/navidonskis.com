import * as React from 'react';
import ReactRevealText from 'react-reveal-text';

class SwapWords extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.skills[0],
      show: true,
      timingFunction: 'ease-in-out',
      timeout: this.props.timeout || 500,
      delay: 6000,
    };
  }

  componentDidMount() {
    this.animatedWords();
  }

  animatedWords() {
    this.timeout = setTimeout(() => {
      const skills = this.skills.slice();
      const states = { show: !this.state.show };
      const timeout = this.state.show === false ? this.state.delay : this.state.timeout;

      if (this.state.show === false) {
        const randomNumber = Math.floor((Math.random() * (skills.length - 1)) + 0);
        const index = skills.indexOf(this.state.title);

        if (index > -1) {
          skills.splice(index, 1);
        }

        states.title = skills[randomNumber];
      }

      this.setState(states);

      setTimeout(() => {
        clearTimeout(this.timeout);
        this.animatedWords();
      }, timeout);
    }, this.state.timeout);
  }

  skills = ['Software Engineer', 'Open Sourcer', 'Dev Dad', 'Runner', 'System Engineer'];

  render() {
    const className = (props) => {
      const defaultClass = 'padded-multiline';
      const toggle = ['hide', 'show'];
      const display = props.show === true ? 1 : 0;

      return `${defaultClass} ${toggle[display]}`;
    };

    return (
      <span className={className(this.state)}>
        <span>{this.state.title}</span>
      </span>
    );
  }
}

export default SwapWords;
