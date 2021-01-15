import React, { Component } from 'react';
import { Provider } from 'react-redux';

import HomePage from './pages/HomePage';
import createStore from './redux/createStore';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <HomePage />
      </Provider>
    )
  }
}

export default App;
