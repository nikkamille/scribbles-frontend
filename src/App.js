import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchNotebooks from './actions/fetchNotebooks';

class App extends Component {

  componentDidMount() {
    this.props.fetchNotebooks()
  }

  render () {
    return (
      <div>
        Hello Kuku!
      </div>
    )
  }
}

export default connect (null, { fetchNotebooks })(App);
