import React from 'react';
import { Redirect } from 'react-router-dom';
import NotesContainer from '../containers/NotesContainer'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import deleteNotebook from '../actions/deleteNotebook';

function Notebook(props) {
    
    let notebook = props.notebook

    // debugger

    const handleDelete = () => {
        props.deleteNotebook(props.notebook.id)
        props.history.push("/notebooks")
    }

    // const handleEditNotebook = (notebook) => {
    //     props.editNotebook(notebook)
    // }

    // Add an alert - confirmation about deleting the notebook, along with all the notes.
    
    return(
        <>
            <h2>{notebook ? props.notebook.title : null}</h2>
            {notebook ? null : <Redirect to="/notebooks" />}
            <Link to="/notebooks/:id/edit">
                <button>Edit Notebook</button>
            </Link>
            <NotesContainer notebook={notebook}/>
            <button onClick={handleDelete}>Delete Notebook</button>
        </>
    )
}

export default withRouter(connect(null, { deleteNotebook })(Notebook))