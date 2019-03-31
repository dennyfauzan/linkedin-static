import React, { Component } from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Header} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
