import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import deleteNote from '../actions/deleteNote';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    root: {
        textAlign: 'center',
        width: '90%',
        height: '350%',
        backgroundColor: '#FAF0F1',
        margin: 'auto',
        padding: '50px'
    }
})


function Note(props) {

    const classes = styles()

    let note = props.note
    console.log(note)

    const handleDelete = () => {
        props.deleteNote(props.note.notebook_id, props.note.id)
        props.history.push(`/notebooks/${props.note.notebook_id}`)
    }

    return(
        <>
            <Box m={4}>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                        <Link to={`/notebooks/${props.notebook.id}/notes/${props.note.id}/edit`}>
                            <button>Edit Note</button>
                        </Link><br/>
                        {note && note.date}
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <button onClick={() => {if (window.confirm("Are you sure you want to delete this note?")) handleDelete()}}>Delete Note</button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default withRouter(connect(null, { deleteNote })(Note))