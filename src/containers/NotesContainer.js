import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Notes from '../components/Notes';
import NoteForm from '../components/NoteForm';
import Note from '../components/Note';

class NotesContainer extends Component {
    
    render() {
        // debugger
        return (
            <div>
                My Notes Container!
                <NoteForm notebook={this.props.notebook}/>
                <Notes notes={this.props.notebook ? this.props.notebook.notes : null}/>
                {/* <Route exact path="/notebooks/:id/notes/:id" render={(routerProps) => <Note {...routerProps}/>}/> */}
                {/* <Route exact path="/notebooks/:id" render={((routerProps) => <Notebook notebook={this.props.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} /> ) }/> */}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     debugger
//     console.log(state)
//     return {
        
//         notes: state.notebooks
//     }
// }

export default NotesContainer