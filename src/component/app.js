import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../page/home';

class App extends React.Component {

  state = {
    boot: false,
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
