import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import deleteNote from '../actions/deleteNote';


function Note(props) {
    // debugger

    let note = props.note
    console.log(note)

    const handleDelete = () => {
        console.log("Deleted")
        // props.deleteNote(props.note.notebook_id, props.note.id)
        props.deleteNote(props.note.notebook_id, props.note.id)
        props.history.push(`/notebooks/${props.note.notebook_id}`)
    }

    return(
        <div>
            {note && note.date}
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default withRouter(connect(null, { deleteNote })(Note))