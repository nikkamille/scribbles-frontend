import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/notebooks')
    .then(response => response.json())
    .then(data => console.log(data[0].notes))
  }


  render () {
    return (
      <div>
        Hello Kuku!
      </div>
    );
  }
}

export default App;
