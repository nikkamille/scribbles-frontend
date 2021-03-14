import React from 'react';
import { Redirect } from 'react-router-dom';

function Notebook(props) {
    console.log(props)
    
    let notebook = props.notebook
    
    return(
        <>
            {notebook ? props.notebook.title : null}
            {notebook ? null : <Redirect to="/notebooks" />}
        </>
    )
}

export default Notebook