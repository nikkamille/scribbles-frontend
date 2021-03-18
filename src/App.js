import React, { Component } from 'react';
import NotebooksContainer from './containers/NotebooksContainer';
import Navbar from './components/Navbar';

class App extends Component {

  render () {
    return (
      <>
        <Navbar/>
        <NotebooksContainer/>
      </>
    )
  }
}

export default App
