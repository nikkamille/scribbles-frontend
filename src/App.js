import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import NotebooksContainer from './containers/NotebooksContainer';
import Navbar from './components/Navbar';
import fetchNotebooks from './actions/fetchNotebooks';
import Notebook from './components/Notebook';
import NewNotebookButton from './components/NewNotebookButton';
import NotebookForm from './components/NotebookForm';
import fetchNotes from './actions/fetchNotes';
import NotesContainer from './containers/NotesContainer';
import NoteForm from './components/NoteForm';

class App extends Component {

  state = {
    notebooks: [],
    notes: []
  }

  componentDidMount() {
    this.props.fetchNotebooks()
    this.props.fetchNotes()
  }

  render () {
    // debugger
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/notebooks">
            <NotebooksContainer notebooks={this.props.notebooks}/>
          </Route>
          <Route exact path="/notebooks/new">
            <NotebookForm notebooks={this.props.notebooks}/> 
            {/* Pass in the notebooks props so the notebook id can be accessed inside the notebook form. */}
          </Route>
          {/* <Route exact path="/notebooks/:id/edit">
            <NotebookForm notebook={this.props.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))}/>
          </Route> */}
          <Route exact path="/notebooks/:id" render={(routerProps => <Notebook notebook={this.props.notebooks && this.props.notebooks.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} /> ) }/>
          <Route exact path="/notebooks/:id/edit" render={(routerProps => <NotebookForm notebook={this.props.notebooks && this.props.notebooks.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} /> ) }/>
          <Route exact path="/notes">
            <NotesContainer notes={this.props.notes.notes}/>
          </Route>
          <Route exact path="/notebooks/:id/notes/new" render={(routerProps => <NoteForm notebook={this.props.notebooks && this.props.notebooks.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} /> ) }/>
        </Switch>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
      notebooks: state.notebooks || [],
      notes: state.notes || []
  }
}

export default connect(mapStateToProps, { fetchNotebooks, fetchNotes })(App)
