import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import NotesContainer from '../containers/NotesContainer'
import { connect } from 'react-redux';
import { withRouter, Link, Redirect } from 'react-router-dom';
import deleteNotebook from '../actions/deleteNotebook';
import NotebookForm from './NotebookForm';
import NewNoteButton from './NewNoteButton';
import Note from './Note';

function Notebook(props) {
    
    let notebook = props.notebook
    console.log(notebook)

    // debugger

    const handleDelete = () => {
        props.deleteNotebook(props.notebook.id)
        props.history.push("/notebooks")
    }

    // const handleEditNotebook = (notebook) => {
    //     props.editNotebook(notebook)
    // }
    
    return(
        <>
            <h2>{notebook ? props.notebook.title : null}</h2>
            {notebook ? null : <Redirect to="/notebooks" />}
            <Link to={`/notebooks/${props.notebook.id}/edit`}>
                <button>Edit Notebook</button>
            </Link>
            <NewNoteButton notebook={notebook}/>
            <NotesContainer notebook={notebook}/>
            {/* <button onClick={handleDelete}>Delete Notebook</button> */}
            <button onClick={() => {if (window.confirm("Are you sure you want to delete this notebook? This will also delete all your notes inside this notebook.")) handleDelete()}}>Delete Notebook</button>
        </>
    )
}

export default withRouter(connect(null, { deleteNotebook })(Notebook))