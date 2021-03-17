import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Notes from '../components/Notes';
import NoteForm from '../components/NoteForm';

class NotesContainer extends Component {
    
    render() {
        // debugger
        return (
            <div>
                My Notes Container!
                <NoteForm notebook={this.props.note}/>
                <Notes notes={this.props.notebook ? this.props.notebook.notes : null}/>
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