import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Notes from '../components/Notes';
import NoteForm from '../components/NoteForm';

class NotesContainer extends Component {
    
    render() {
        return (
            <div>
                My Notes Container!
                <NoteForm/>
                <Notes/>
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