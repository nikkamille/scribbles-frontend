import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchNotebooks from './actions/fetchNotebooks';
import NotebooksContainer from './containers/NotebooksContainer';
import NotebookFormContainer from './containers/NotebookFormContainer';

class App extends Component {

  componentDidMount() {
    this.props.fetchNotebooks()
  }

  render () {
    return (
      <>
        <NotebooksContainer/>
        <NotebookFormContainer/>
      </>
    )
  }
}

export default connect (null, { fetchNotebooks })(App);
