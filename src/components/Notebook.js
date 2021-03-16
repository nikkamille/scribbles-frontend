import React from 'react';
import { Redirect } from 'react-router-dom';
import NotesContainer from '../containers/NotesContainer'

function Notebook(props) {
    
    let notebook = props.notebook
    
    return(
        <>
            <h2>{notebook ? props.notebook.title : null}</h2>
            {notebook ? null : <Redirect to="/notebooks" />}
            <NotesContainer/>
        </>
    )
}

export default Notebook