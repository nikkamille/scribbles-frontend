import React from 'react';
import { Redirect } from 'react-router-dom';
import NotesContainer from '../containers/NotesContainer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import deleteNotebook from '../actions/deleteNotebook';

function Notebook(props) {
    
    let notebook = props.notebook

    // debugger

    const handleDelete = () => {
        console.log("Notebook Deleted")
        props.deleteNotebook(props.notebook.id)
        props.history.push("/notebooks")
    }
    
    return(
        <>
            <h2>{notebook ? props.notebook.title : null}</h2>
            {notebook ? null : <Redirect to="/notebooks" />}
            <NotesContainer notebook={notebook}/>
            <button onClick={handleDelete}>Delete Notebook</button>
        </>
    )
}

export default withRouter(connect(null, { deleteNotebook })(Notebook))