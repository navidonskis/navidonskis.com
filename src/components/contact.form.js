'use strict';

import React, {Component} from 'react';

class ContactForm extends Component {

    state = {
        initialize: false
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(event);

        return false;
    }

    render() {
        return (
            <form method="post" onSubmit={this.handleSubmit}>
                <div className="mdc-text-field mdc-text-field--upgraded" data-mdc-auto-init="MDCTextField">
                    <input type="text" id="my-text-field" className="mdc-text-field__input"/>
                    <label className="mdc-text-field__label" htmlFor="my-text-field">Hint text</label>
                    <div className="mdc-text-field__bottom-line"></div>
                </div>

                <div className="mdc-text-field" data-mdc-auto-init="MDCTextField">
                    <input type="text" id="username" className="mdc-text-field__input" aria-controls="username-helptext"/>
                    <label htmlFor="username" className="mdc-text-field__label">Username</label>
                    <div className="mdc-text-field__bottom-line"></div>
                </div>

                <div className="mdc-form-field" data-mdc-auto-init="MDCTextField">
                    <input type="text" id="input" className="mdc-text-field__input"/>
                    <label htmlFor="input">Input Label</label>
                </div>
            </form>
        );
    }
}

export default ContactForm;