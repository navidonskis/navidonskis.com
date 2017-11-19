import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const blockData = {
    title: "About me",
    content: "I'm professional freelance full stack web developer working with back-end & front-end sides. I have experience with various " +
    "PHP web frameworks, content management systems and user interface interactions. I‘ve gained Bachelors degree of network and system " +
    "administrator. I am highly motivated and result-oriented professional."
};

class About extends Component {
    render() {
        return (
            <section className="content-block about-block">
                <div className="about-block--container mdc-layout-grid">
                    <h1 className="about-block--title heading-line">{blockData.title}</h1>
                    <div className="about-block--content mdc-layout-grid__cell">
                        <p>{blockData.content}</p>

                        <div className="about-block--cta">
                            <Link to="/contacts"
                                  className="about-block--cta-button mdc-button mdc-button--raised mdc-button--white">{'Contact me'}</Link>
                            <Link to="/resume"
                                  className="about-block--cta-button mdc-button mdc-button--raised mdc-button--transparent">{'Read resume'}</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;