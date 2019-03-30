import React, { Component } from 'react';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="fs-sm fc-primary">Hello World</h1>
      </div>
    );
  }
}

export default App;
