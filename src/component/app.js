import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import Home from '../page/home';
import Blog from "../page/blog";
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog" component={Blog}/>
                </div>
            </Router>
        );
    }
}

export default App;
