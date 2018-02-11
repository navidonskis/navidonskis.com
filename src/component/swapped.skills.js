import * as React from 'react';

class SwappedSkills extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.skills[0],
    };

    this.options = {
      timeout: this.props.timeout || 3000,
    };

    this.bindEvents();
  }

  skills = ['Software Engineer', 'Open Sourcer', 'Dev Dad', 'Runner', 'System Engineer'];

  bindEvents() {
    setInterval(() => {
      const skills = this.skills.slice();
      const randomNumber = Math.floor((Math.random() * (skills.length - 1)) + 0);
      const index = skills.indexOf(this.state.title);

      if (index > -1) {
        skills.splice(index, 1);
      }

      this.setState({ title: skills[randomNumber] });
    }, this.options.timeout);
  }

  render() {
    return (
      <span className="padded-multiline">
        <span>
          {this.state.title}
        </span>
      </span>
    );
  }
}

export default SwappedSkills;
