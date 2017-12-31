import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import NotFound from '../pages/not-found';

import mdcAutoInit from '@material/auto-init';
import {MDCTextfield} from '@material/textfield';
import {MDCRipple, MDCRippleFoundation, util} from '@material/ripple';
import {MDCFormField, MDCFormFieldFoundation} from '@material/form-field';
import {AnimatedSwitch} from 'react-router-transition';

class App extends Component {

    state = {
        initialize: false
    };

    componentDidMount() {
        if (false === this.state.initialize) {
            mdcAutoInit.register('MDCTextField', MDCTextfield);
            mdcAutoInit.register('MDCRipple', MDCRipple);
            mdcAutoInit.register('MDCRippleFoundation', MDCRippleFoundation);
            mdcAutoInit.register('MDCFormField', MDCFormField);
            mdcAutoInit.register('MDCFormFieldFoundation', MDCFormFieldFoundation);

            this.setState({initialize: true});
        }
    }

    render() {
        return (
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route path="*" component={NotFound}/>
            </AnimatedSwitch>
        );
    }
}

export default App;