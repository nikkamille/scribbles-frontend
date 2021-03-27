import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import NotesContainer from '../containers/NotesContainer'
import { connect } from 'react-redux';
import { withRouter, Link, Redirect } from 'react-router-dom';
import deleteNotebook from '../actions/deleteNotebook';
import NotebookForm from './NotebookForm';
import NewNoteButton from './NewNoteButton';
import Note from './Note';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Notebook(props) {
    
    let notebook = props.notebook
    console.log(notebook)

    // debugger

    const handleDelete = () => {
        props.deleteNotebook(props.notebook.id)
        props.history.push("/notebooks")
    }
    
    return(
        <>
            <Box m={4}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Typography variant="h5">
                            {notebook ? props.notebook.title : null}
                        </Typography>
                        {notebook ? null : <Redirect to="/notebooks" />}
                        <Link to={`/notebooks/${props.notebook.id}/edit`}>
                            <button>Edit Notebook</button>
                        </Link>
                        <NewNoteButton notebook={notebook}/>
                        <NotesContainer notebook={notebook}/>
                        <button onClick={() => {if (window.confirm("Are you sure you want to delete this notebook? This will also delete all your notes inside this notebook.")) handleDelete()}}>Delete Notebook</button>
                    </Grid>
                    <Grid item xs={9}>
                        
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default withRouter(connect(null, { deleteNotebook })(Notebook))