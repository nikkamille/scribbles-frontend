import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Notes from '../components/Notes';
import NoteForm from '../components/NoteForm';
import Note from '../components/Note';

class NotesContainer extends Component {

    render() {
        // debugger
        return (
            <div>
                My Notes Container!
                <Notes notes={this.props.notebook ? this.props.notebook.notes : this.props.notes}/>
            </div>
        )
    }
}

export default NotesContainer