import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import deleteNote from '../actions/deleteNote';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


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
            <Link to={`/notebooks/${props.notebook.id}/notes/${props.note.id}/edit`}>
                <button>Edit Note</button>
            </Link>
            {note && note.date}
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            {/* <button onClick={handleDelete}>Delete</button> */}
            <button onClick={() => {if (window.confirm("Are you sure you want to delete this note?")) handleDelete()}}>Delete Note</button>
        </div>
    )
}

export default withRouter(connect(null, { deleteNote })(Note))