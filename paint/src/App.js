import React, { Component } from 'react';
import './App.css';

import PaintCanvas from './components/PaintCanvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaintCanvas />
      </div>
    );
  }
}

export default App;
