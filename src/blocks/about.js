import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <section className="content-block about-block">
                <div className="about-block--container mdc-layout-grid">
                    <h1 className="about-block--title">{'About me'}</h1>

                    <div className="about-block--content mdc-layout-grid__cell">
                        <p>
                            I'm professional freelance full stack web developer working with back-end & front-end sides. I have experience with various PHP web frameworks, content management systems and user interface interactions. I‘ve gained Bachelors degree of network and system administrator. I am highly motivated and result-oriented professional.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;