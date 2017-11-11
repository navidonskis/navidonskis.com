import React from 'react';
import Interactive from 'react-interactive';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';
import ReactMarkdown from 'react-markdown';

var input = '# App for navidonskis.github.io';


export default function App() {
    return (
        <div style={s.root}>
            <ReactMarkdown source={input} style={s.title} />
            <Interactive
                as="a"
                href="https://github.com/navidonskis/navidonskis.github.io"
                style={s.repoLink}
                {...s.link}
            >
                https://github.com/navidonskis/navidonskis.github.io
            </Interactive>

            <nav style={s.breadcrumbs}>
                <Breadcrumbs />
            </nav>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/example" component={ExampleComponent}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}
