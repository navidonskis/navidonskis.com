import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import NotFound from '../pages/not-found';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route path="*" component={NotFound} status={404}/>
            </Switch>
        );
    }
}

export default App;