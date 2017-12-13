import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer mdc-layout-grid">
                <div className="footer__container">
                    {this.props.children}
                </div>
            </footer>
        );
    }
}

export default Footer;