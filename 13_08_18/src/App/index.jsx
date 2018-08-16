import React, { Component } from 'react';
import MainPage from 'conteiners/MainPage';

/* Class work 15 08 18 */

class App extends Component {
  constructor(props) {
    super(props);
    console.log('class');
  }

  render() {
    return (
      <MainPage />
    );
  }
}

export default App;
