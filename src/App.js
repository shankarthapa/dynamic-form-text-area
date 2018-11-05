import React, { Component } from 'react';
import './App.css';
import TextAreaList from './comp/text-area-list/text-area-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextAreaList></TextAreaList>
      </div>
    );
  }
}

export default App;
