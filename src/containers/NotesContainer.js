import React, { Component } from 'react';
import Notes from '../components/Notes';

class NotesContainer extends Component {

    render() {
        return (
            <div>
                My Notes
                <Notes notes={this.props.notebook ? this.props.notebook.notes : this.props.notes}/>
            </div>
        )
    }
}

export default NotesContainer