import React, { Component } from 'react';

import './global/css/index.css';
import Header from './global/Header';
import Main from './global/Main';
import Asite from './global/Asite';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Asite />
      </div>
    );
  }
}
export default App;

